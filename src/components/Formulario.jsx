import { useState, useEffect } from 'react';
import Error from './Error';
import { generarId } from '../helpers';

const Formulario = ({nota, setNota, actualizarNota, crearNota}) => {
    
    const [titulo, setTitulo] = useState('');
    const [fecha, setFecha] = useState('');
    const [cuerpo, setCuerpo] = useState('');

    const [error, setError] = useState(false);

    useEffect(()=>{
        if( Object.keys(nota).length > 0){
            setTitulo(nota.titulo)
            setFecha(nota.fecha)
            setCuerpo(nota.cuerpo)
        }
    }, [nota]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if([titulo,fecha,cuerpo].includes('')){
            console.log('Faltan llenar campos.'); 
            setError(true);
        }else{
            setError(false);
            const objetoNota = {
                titulo,
                fecha,
                cuerpo,
            }

            if(nota.id){
                console.log('Editando');
                objetoNota.id = nota.id
                actualizarNota(objetoNota.id, objetoNota);
                setNota({});
            }else{
                console.log('Agregando');
                objetoNota.id = generarId()
                crearNota(objetoNota);
            }
            setTitulo('');
            setFecha('');
            setCuerpo('');
        }
    }

    return (
    <div className='mb-10 md:w-1/2'>
        <h1 className="text-white font-black text-3xl text-center my-10" id="title">Escribí tus notas y{" "}
            <span className="text-indigo-600"> administralas</span>
        </h1>

        {error && <Error><p>Todos los campos son obligatorios</p></Error>}

        <form onSubmit={handleSubmit} className=''>

        <div className="mb-5">
            <label htmlFor="title" className='text-white text-md mb-2'>Título</label>
            <input name='title' value={titulo} onChange={(e)=> setTitulo(e.target.value)} id="title" type="text" placeholder="Título para tu nota" className="p-2 border-2 border-indigo-600 w-full mt-2 placeholder-gray-400 rounded-md" 
            />
        </div>

        <div className="mb-5">
          <label htmlFor="fecha" className='text-white text-md mb-2'>Fecha</label>
          <input name='date' value={fecha} onChange={(e)=> setFecha(e.target.value)} id="fecha" type="date" className="p-2 border-2 border-indigo-600 w-full mt-2 placeholder-gray-400 rounded-md"/>
        </div>

        <div className="mb-5">
            <label htmlFor="title" className='text-white text-md mb-2'>Nota</label>
            <textarea name='note' value={cuerpo} onChange={(e)=> setCuerpo(e.target.value)} id="note" type="textarea" placeholder="Escribe tu nota aquí..." className="p-2 border-2 border-indigo-600 w-full h-60 mt-2 placeholder-gray-400 rounded-md" 
            />
        </div>

        <input type="submit" value={nota.id ? 'guardar cambios' : 'crear nota'} className='mb-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg rounded-md hover:bg-indigo-500 cursor-pointer ease-in-out duration-300'/>

        </form>
    </div>
    )
}

export default Formulario;

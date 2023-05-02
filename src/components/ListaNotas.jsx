import Nota from './Nota'
import Spinner from './Spinner'

const ListaNotas = ({notasBD, setNota, confirmDelete, goForm, loading}) => {
    return (
    <div className='md:w-1/2'>
        <h2 className='text-white font-black text-3xl text-center my-10 mb-12'>Administra tus notas{''}
            <span className='text-indigo-600'> aquí</span>
        </h2>      
        
        {notasBD.length > 0 ? (
            <>    
                {loading ? (<Spinner/>) : (
                    <div className='md:overflow-y-scroll max-h-screen'>
                        {notasBD.map((nota) => (
                            <Nota 
                                key={nota.id}
                                nota={nota}
                                setNota={setNota}
                                confirmDelete={confirmDelete}
                                goForm={goForm}
                                loading={loading}
                            />
                        ))}
                    </div>
                )}                            

            </>
        ) : (
            <>                   
                <p className='text-red-500 text-center text-xl font-bold'>No hay notas</p>
            </>
        )}   
    </div>
  )
}

export default ListaNotas

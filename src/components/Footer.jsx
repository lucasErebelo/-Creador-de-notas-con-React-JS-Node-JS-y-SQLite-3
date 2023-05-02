import React from 'react'
import 'boxicons'


const Footer = ({notasBD, goForm}) => {

  return (
    <div className='sticky bottom-0 bg-indigo-500 shadow-md text-center p-4 text-white flex justify-between'>
        <p className='font-bold px-3 py-1'>{notasBD.length} {notasBD.length > 1 ? 'notas' : 'nota'}</p>
        <button onClick={goForm} className='flex bg-slate-900 px-3 py-1 rounded hover:bg-slate-800 ease-in-out duration-300'>Agregar una nota
        </button>
    </div>
  )
}

export default Footer

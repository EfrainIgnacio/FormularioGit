import { useEffect } from "react"


function Paciente({pacientePadre,setpacienteEditar,pacienteElimado}) {

    useEffect(()=>{

    },[])


    const hansedPacienteEliminado = () => {
        // eslint-disable-next-line no-restricted-globals
        const confirmarEliminacion= confirm ('Estas seguro de eliminar');


        if(confirmarEliminacion){
            pacienteElimado(id)
        }


    }

    const {nombre,apellido,email,fecha,id}=pacientePadre  /* Destructuracion */

    return (

        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl ">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''} 
                <span className="font-normal normal-case">{pacientePadre.nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Apellido: {''} 
                <span className="font-normal normal-case">{pacientePadre.apellido}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''} 
                <span className="font-normal normal-case">{email}</span> {/* Destructuracion */}
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Dia: {''} 
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <div>
                <button 
                type="button"
                className="py-2 px-10 bg-yellow-500 hover:bg-yellow-600 text-center text-white font-bold
                            uppercase rounded-lg mr-2"
                onClick={()=>setpacienteEditar(pacientePadre)}
                >Editar</button>
                <button 
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-800 text-center text-white font-bold
                            uppercase rounded-lg"
                onClick={()=>hansedPacienteEliminado()}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente
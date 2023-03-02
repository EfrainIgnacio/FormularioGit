import { useEffect } from "react"
import Paciente from "./Paciente" 

function ListadoPaciente({paciente,setpacienteEditar,pacienteElimado}) {

    useEffect(() => {    
        if (paciente.length>0) {
            
            // console.log("nuevo paciente")
        }
    
    }, [paciente])

    

    return (

        <div className="md:w-1/2 lg:w-4/5 md:h-screen overflow-y-scroll">
            {/* paciente&&paciente.lengt */}
            { paciente.length>0 ? (
                <>
                
                    <h2 className="font-black text-3xl text-center">Formulario del usuario</h2>
                    {
                        paciente.map((pacientePadre)=>(

                            <Paciente
                                key={pacientePadre.id}
                                pacientePadre={pacientePadre}
                                setpacienteEditar={setpacienteEditar}
                                pacienteElimado={pacienteElimado}
                            />
                        ))
                    }
                </>
                ) : (
                    <>
                        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    </>
                )}
        </div>
    )
}

export default ListadoPaciente
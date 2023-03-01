
import Paciente from "./Paciente"

function ListadoPaciente({paciente}) {
    return (
        <div className="md:w-1/2 lg:w-4/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">Formulario del usuario</h2>
            {
                paciente.map((paciente)=>(

                    <Paciente
                    key={paciente.id}
                        paciente={paciente}
                    />
                ))
            }

        </div>

    )
}

export default ListadoPaciente
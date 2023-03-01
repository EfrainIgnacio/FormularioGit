function Paciente({paciente}) {

    const {nombre,apellido,email,fecha}=paciente
  return (

        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl ">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''} 
                <span className="font-normal normal-case">{paciente.nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Apellido: {''} 
                <span className="font-normal normal-case">{paciente.apellido}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''} 
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Dia: {''} 
                <span className="font-normal normal-case">{nombre}</span>
            </p>
        </div>
  )
}

export default Paciente
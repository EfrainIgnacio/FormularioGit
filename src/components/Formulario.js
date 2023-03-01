import { useState } from "react"
import MensajeError from "./MensajeError"

function Formulario({paciente,setPaciente}) {


    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')


    const [error, setError] = useState(false)

    const generarId=()=>{
        const random=Math.random().toString(36).substring(2)
        const fech=Date.now().toString(36)

        return random+fech
    }

    const handleSubmit=(evento)=>{
        evento.preventDefault();
        

        //Validacino de formulario
        if ([nombre,apellido,email,fecha].includes('')) {

            setError(true)
            return
        }
        setError(false)
        

        //Crear un objeto para agregarlo en el arreglo
        const objetoPaciente={
            nombre:nombre,
            apellido:apellido,
            email,
            fecha,
            id:generarId()
        }
        setPaciente([...paciente,objetoPaciente])

        //Limiar formulario
        setNombre("")
        setApellido("")
        setEmail("")
        setFecha("")
    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">

            <form
                onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded-lg py-10 px-5 mt-5"
            >
                {/* Mensaje de formulario */}
                {
                    error &&(<MensajeError Mensaje="Todos los campos son obligatorios"/> ) 
                }
                <div className="mb-5">  
                    <label htmlFor="nombre" className="block text-gray-700 font-bold uppercase">Nombre usuario</label>
                    <input 
                        id="nombre"
                        type="text"
                        placeholder="Nombre del usuario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-lg"
                        value={nombre}
                        //Nos permite escribir en el input
                        onChange={(evento)=>setNombre(evento.target.value)}
                    />
                </div>

                <div className="mb-5"> 
                    <label htmlFor="apellido" className="block text-gray-700 font-bold uppercase">Apellido usuario</label>
                    <input 
                        id="apellido"
                        type="text"
                        placeholder="Apellido del usuario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-lg"
                        value={apellido}
                        onChange={(evento)=>setApellido(evento.target.value)}
                    />
                </div>

                <div className="mb-5"> 
                    <label htmlFor="email" className="block text-gray-700 font-bold uppercase">Email usuario</label>
                    <input 
                        id="email"
                        type="text"
                        placeholder="Email del usuario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-lg"
                        value={email}
                        onChange={(evento)=>setEmail(evento.target.value)}
                    />
                </div>

                <div className="mb-5"> 
                    <label htmlFor="dia" className="block text-gray-700 font-bold uppercase">Fecha </label>
                    <input 
                        id="dia"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-lg"
                        value={fecha}
                        onChange={(evento)=>setFecha(evento.target.value)}
                    />
                </div>

                <input 
                    type="submit"
                    className="bg-indigo-500 w-full text-white p-2 rounded-lg hover:bg-indigo-700 hover:cursor-pointer transition-all"
                    value="Agregar"
                />
            </form>
        </div>
    )
}

export default Formulario
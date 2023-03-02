import { useEffect, useState } from "react"

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPaciente from "./components/CardsPaciente"

function App(){

    const [paciente, setPaciente] = useState([])

    //useState Boton editar 
    const [pacienteEditar, setpacienteEditar] = useState({})


    useEffect(()=>{
        
        const obtenerLocalStorage=()=>{
            const pacientesLS=JSON.parse(localStorage.getItem('paciente')) ?? [];
            setPaciente(pacientesLS)
        }

        obtenerLocalStorage()
    },[]);


    useEffect(()=>{
        localStorage.setItem('paciente',JSON.stringify(paciente))
    },[paciente])

    const pacienteElimado=(id)=>{
        const pacineteAcutalizado=paciente.filter(paciente=>paciente.id !== id)
        setPaciente(pacineteAcutalizado)
    }

    return(
        <div className="container mx-auto mt-10">
            <Header/>

            <div className="mt-12 md:flex">
                <Formulario
                    paciente={paciente}
                    setPaciente={setPaciente}
                    pacienteEditar={pacienteEditar}

                    //Para limpiar el state
                    setpacienteEditar={setpacienteEditar}

                />
                <ListadoPaciente
                    paciente={paciente}
                    setpacienteEditar={setpacienteEditar}
                    pacienteElimado={pacienteElimado}
                />
            </div>
        </div>
        
    )
}

export default App


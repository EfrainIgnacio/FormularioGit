import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPaciente from "./components/ListadoPaciente"
import { useState } from "react"
function App(){

    const [paciente, setPaciente] = useState([])

    return(
        <div className="container mx-auto mt-10">
            <Header/>

            <div className="mt-12 md:flex">
                <Formulario
                    paciente={paciente}
                    setPaciente={setPaciente}
                />
                <ListadoPaciente
                    paciente={paciente}
                />
            </div>
        </div>
        
    )
}

export default App


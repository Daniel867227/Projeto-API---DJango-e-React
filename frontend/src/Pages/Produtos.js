import { useEffect } from "react"
import NavBar from "../components/NavBar"
import axios from "axios"


function Produtos(){

    useEffect(()=>{
        MostrarDados()
    })

    

    async function MostrarDados(){
        const response = await axios.get('')
        .then(
            (res)=>{
            console.log('Requisição feita com sucesso')
            })
        .catch(
            (res)=> {
                console.log(res)
            })

    }

    return(
        <div>
            <NavBar/>
           
        </div>
    )
}

export default Produtos
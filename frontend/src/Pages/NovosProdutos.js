import Formulario from "../components/Formulário"
import NavBar from "../components/NavBar"
import { useState } from "react"
import axios from 'axios'

function NovosProdutos(){



    const [Nome, SetNome] = useState('')
    const [Preco, SetPreco] = useState('')
    const [Vendedor, SetVendedor] = useState('')


    const EnviarDados = async (e)=>{

        e.preventDefault()

        console.log('clicou')
        
        const response = await axios.post('')
        .then( res => {
            console.log('Dados enviados com sucesso!')
            }
        )
        .catch( err => {
            console.log(err)
        }

        )

    }


    return (
        <div>
            <NavBar/>
            <Formulario 
                mylabel1={'Nome do Produto'}
                mylabel2={'Preço'} 
                mylabel3={'Vendedor'} 
                text={'Faça o Cadastro do Produto'}
                onChange1={(e)=>SetNome(e.target.value)}
                onChange2={(e)=>SetPreco(e.target.value)}
                onChange3={(e)=>SetVendedor(e.target.value)}
                myfunction={EnviarDados}
            />
        </div>
    )
}

export default NovosProdutos
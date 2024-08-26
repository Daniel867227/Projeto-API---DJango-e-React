import Formulario from "../components/Formulário"
import NavBar from "../components/NavBar"
import { useEffect, useState } from "react"
import axios from 'axios'

function NovosProdutos(){

    useEffect(()=>{
        PegarDados()
    },[])

    const [Nome, SetNome] = useState('')
    const [Preco, SetPreco] = useState('')
    const [Vendedor, SetVendedor] = useState('')

    const [Vendedores, SetVendedores] = useState([])


    const dados = 
        {
            nome:Nome,
            preco:Preco,
            vendedor:Vendedor,
        }
    

    const EnviarDados = async (e)=>{

        e.preventDefault()

        console.log(dados)
        
        const response = await axios.post('http://127.0.0.1:8000/api/cadastro/', dados )
        .then( res => {
            console.log('Dados enviados com sucesso!')
            }
        )
        .catch( err => {
            console.log(err)
        }

        )

    }

    const PegarDados = async (e) =>{
    

        const response = await axios.get('http://127.0.0.1:8000/api/todosvendedores/')
        .then( res => {
            console.log('Dados pegos com sucesso!')
            SetVendedores(res.data)
        })
        .catch( err => {
            console.log(err)
        })
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
                list={Vendedores}

            />
        </div>
    )
}

export default NovosProdutos
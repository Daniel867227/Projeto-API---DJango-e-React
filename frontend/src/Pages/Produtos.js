import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import axios from "axios"
import Container from "@mui/material/Container"


function Produtos(){

    useEffect(()=>{
        MostrarDados()
    },[])

    const[Dados, setDados] = useState([])



    

    async function MostrarDados(e){

        
        const response = await axios.get('http://127.0.0.1:8000/api/todosprodutos/')
        .then(
            (res)=>{

                setDados(res.data)
                console.log('Requisição feita com sucesso')
                console.log(res.data)

            
            })
        .catch(
            (res)=> {
                console.log(res)
            })

    }

    async function DeletarDados(id) {
        
        const response = await axios.delete(`http://127.0.0.1:8000/api/deletarproduto/${id}/`)
        .then(
            (res)=> 
                console.log('Deletado com sucesso!')
        )
        .catch(
            (err)=>
                console.log(err)
        )
        
    }



    return(
        <div>
            <NavBar/>

            <Container>
            <h1>Produtos</h1>
            {Dados.map((item)=>(
                <div style={{display:'flex', alignItems:'right'}} key={item.id}>
                   <h2>{item.nome} {item.preco} {item.vendedor.nome}</h2>
                   <button>Editar</button>  
                   <button onClick={()=> DeletarDados(parseInt(item.id))}>Deletar</button>           
         
                </div>
            )
            )
            }
            </Container>
           
        </div>
    )
}

export default Produtos
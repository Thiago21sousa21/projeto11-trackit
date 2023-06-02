import styled from "styled-components";
import logo from './../../assets/8tracklt.svg';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cadastro() {
    const [cadastro, setCadastro] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });
    //useEffect(()=>{},[]);
    function enviarCadastro(e) {
        e.preventDefault();
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        //const newCadastro = {...cadastro};
        console.log(cadastro);
        axios.post(URL, cadastro)
            .then((ans)=>{
                console.log(ans);
                alert('agora é so fazer login!');
            })
            .catch((err)=> alert(err.response.data.message));
        setCadastro({
            email: "",
            name: "",
            image: "",
            password: ""
        });
    }

    
    return (
        <CsCadastro>
            <img src={logo} />
            <form onSubmit={enviarCadastro}>
                <input placeholder="email" onChange={(e) => setCadastro({ ...cadastro, email: e.target.value })} value={cadastro.email} type="email" name="" id="" />
                <input placeholder="senha"  onChange={(e) => setCadastro({ ...cadastro, password: e.target.value })} value={cadastro.password} type="password" name="" id="" />
                <input placeholder="nome" onChange={(e) => setCadastro({ ...cadastro, name: e.target.value })} value={cadastro.name} type="text" name="" id="" />
                <input placeholder="imagem" onChange={(e) => setCadastro({ ...cadastro, image: e.target.value })} value={cadastro.image} type="url" name="" id="" />
                <button>entrar</button>
            </form>
            <Link to='/'>
                <p>Votar para fazer login</p>
            </Link>


        </CsCadastro>);
}

const CsCadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;

    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
    z-index: 20;

    img{
        margin-top: 70px;
        margin-bottom: 32px;
        width:180px;
        height: 180px;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 6px; 
    }
    p{
        margin-top: 25px;
        color: #52B6FF;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 14px;
    }
`;
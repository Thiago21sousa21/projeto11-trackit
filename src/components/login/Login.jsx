import styled from "styled-components";
import logo from './../../assets/8tracklt.svg';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import Contexto from "../../Contexto/Contexto";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);

    const { setToken, token, setPhoto } = useContext(Contexto);
    const [credencial, setCredencial] = useState({
        email: "",
        password: ""
    });

    function fazerLogin(e) {
        e.preventDefault();
        setDisabled(true);
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', credencial)
            .then((ans) => {
                //console.log(ans.data);
                setToken(ans.data.token);
                setPhoto(ans.data.image);
                navigate('/hoje');
                setDisabled(false);

            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data.message);
                setDisabled(false);

            });
    }

    return (
        <CsLogin>
            <img src={logo} />
            <form onSubmit={fazerLogin}>
                <input data-test="email-input" onChange={(e) => setCredencial({ ...credencial, email: e.target.value })} value={credencial.email} placeholder="email" type="email" name="email" id="email" />
                <input data-test="password-input" onChange={(e) => setCredencial({ ...credencial, password: e.target.value })} value={credencial.password} placeholder="senha" type="password" name="name" id="name" />
                <button data-test="login-btn" disabled={disabled}>
                    {
                        !disabled ?
                            'Entrar'
                            : (
                                <ThreeDots
                                    height="13"
                                    width="51"
                                    radius="9"
                                    color="#ffffff"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                />
                            )

                    }
                </button>
            </form>
            <Link to='/cadastro' data-test="signup-link" className="none" >
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>

        </CsLogin>);
}

const CsLogin = styled.div`
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
        width: 80%;
        input{
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            height: 45px;
            width: 100%
        }
        button{
            background: #52B6FF;
            border: none;
            border-radius: 5px;
            height: 45px;
            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 21px;
            line-height: 26px;
            color: #FFFFFF; 
            display: flex;
            justify-content: center;
            align-items: center;           
        }
    }
    .none{
        margin-top: 25px;
        color: #52B6FF;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 14px;
    }
   
`;
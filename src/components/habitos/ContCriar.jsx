import { useContext, useState } from "react";
import styled from "styled-components";
import BotaoHabitos from "./BotaoHabitos";
import axios from "axios";
import Contexto from "../../Contexto/Contexto";
import { useNavigate } from "react-router-dom";


export default function ContCriar(props) {
    const {token, diasHabito, setDiasHabito} = useContext(Contexto);
    const {display, setDisplay, arrayHabitos, setArrayHabitos} = props;
    const dias = ['D','S','T', 'Q', 'Q', 'S', 'S'];
    const [nomeHabito, setNomeHabito]= useState('');
    const navigate = useNavigate();

    function enviarNovoHabito(e){
        e.preventDefault();
        const body = { name: nomeHabito, days: diasHabito}
        const config= {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config)
            .then((ans)=>{
                console.log(ans);
                setDiasHabito([]);
                setNomeHabito('');
                setDisplay('none');

                axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
                .then((ans)=>{
                    console.log(ans.data);
                    setArrayHabitos(ans.data);
                })
                .catch( (err)=>{
                    alert(err.response.data.message);
                    console.log('ERRO!', ans);
                })
                
                })
            .catch( (err)=>{
                console.log(err);
                alert(err.response.data.message);
            });
 

    }

    return (
        <CsContCriar display={display}>
            <form onSubmit={enviarNovoHabito}>
                <input onChange={(e)=>{setNomeHabito(e.target.value)}} value={nomeHabito} placeholder="Nome do hábito" type="text" name="" id="" />
                <div className="botoesSemana">
                    
                    {dias.map((dia, i) => (<BotaoHabitos
                                                i={i}
                                                dia={dia}
                                                key={i}
                                                diasHabito={diasHabito} setDiasHabito={setDiasHabito}
                                            />))}

                </div> 
                <div className="addCancel">
                    <button className="cancelar" type="button" onClick={() => setDisplay('none')}>Cancelar</button>
                    <button className="salvar" type="submit" >Salvar</button>

                </div>
            </form>
        </CsContCriar>
    );
}
const CsContCriar = styled.div`

    width: 100%;
    height: 180px;
    //border: 1px solid;
    background-color: #ffffff;
    border-radius: 5px;

    display: ${props => props.display};
    flex-direction: column;
    align-items: center;

    form{
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input{
        width: 90%;
        height: 45px;
        margin: 18px auto 10px;
    }

    .botoesSemana{
        // border: 1px solid;

        width: 90%;

    }
    .addCancel{
        //border: 1px solid;
        margin: 30px auto 15px;


        display: flex;
        justify-content: end;

        width: 90%;
        button{
            width: 84px;
            height: 35px;
        }
        .cancelar{
            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #52B6FF;
            border: none;
            background-color: #ffffff;
        }
        .salvar{
            background: #52B6FF;
            border-radius: 5px;
            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #FFFFFF;
            border: none;
        }
    }

`;

import styled from 'styled-components';
import TarefaHoje from './TarefaHoje';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Contexto from './../../Contexto/Contexto';

export default function Hoje (){

    const [arrTarefasHoje, setArrTarefasHoje]= useState(undefined);
    const {token} = useContext(Contexto);

    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(()=>{
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
            .then((ans)=>{
                setArrTarefasHoje(ans.data);
            })
            .catch((err)=>console.log(  'deu ruim'));
    },[]);

    return(
        <CsHoje>
            <div className="molde">
                <div className="tituloHoje">
                    <h1>Segunda, 17/05</h1>
                    <h2>Nenhum hábito concluído ainda</h2>
                </div>

                { arrTarefasHoje === undefined ? (
                    <>carregando...</>
                ) : (
                    arrTarefasHoje.map(( e, idx )=><TarefaHoje setArrTarefasHoje={setArrTarefasHoje} key={e.id} e={e} idx = {idx}/>)
                )}

            </div>
        </CsHoje>
    );
}

const CsHoje = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f2f2f2;

    //border: 1px solid;

    padding: 70px 0px;
    .molde{
        width: 90%;
        height: 100%;
        //border: 1px solid red;
        padding: 100px  0px 40px;
        overflow-y: scroll;
        margin: 0 auto;

    }
    .tituloHoje{
        height: 100px;
        //border: 1px solid green;
        background-color: #f2f2f2;
        width: 90%;
        margin-bottom: 28px;

        position: fixed;
        top: 70px;
        left: 50%;
        transform: translate(-50%);
        display:flex;
        flex-direction: column;
        justify-content: center;
        

        h1{
            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 23px;
            color: #126BA5;

        }
        h2{
            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: #BABABA;  
        }

    }
    

`;
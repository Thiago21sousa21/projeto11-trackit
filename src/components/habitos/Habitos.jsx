import styled from "styled-components";
import Habito from "./Habito";
import { useContext, useEffect, useState } from "react";
import ContCriar from "./ContCriar";
import axios from "axios";
import Contexto from "../../Contexto/Contexto";

export default function Habitos() {
    const {token} = useContext(Contexto);
    const [arrayHabitos, setArrayHabitos] = useState(undefined);

    const config ={
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(()=>{
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
            .then((ans)=>{
                //console.log(ans.data);
                setArrayHabitos(ans.data);
            })
            .catch( (err)=>{
                alert(err.response.data.message);
                console.log('ERRO!', ans);
            })
    },[]);

    const [display, setDisplay] = useState('none');

    return (
        <CsCinza>
            <CsHabitos display={display}>
                <div className="containerTituloMeusHabitos">
                    <p>Meus hábitos</p>
                    <button onClick={() => setDisplay('flex')}>+</button>
                </div>

                <ContCriar 
                    display={display} setDisplay={setDisplay}
                    setArrayHabitos={setArrayHabitos} arrayHabitos={arrayHabitos}
                />

                {arrayHabitos === undefined ? ( 
                        <>carregando...</> 
                    ) : (
                        arrayHabitos.map( (e, i)=> <Habito setArrayHabitos={setArrayHabitos} key={e.id} e={e} /> )
                    )
                }
                {/* <Habito />
                <Habito />
                <Habito /> */}

            </CsHabitos>
        </CsCinza>);
}

const CsCinza = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f2f2f2;
    padding: 145px 0 70px;
`;

const CsHabitos = styled.div`
    width: 90%;
    height: 100%;
    //border: 1px solid;
    background-color: #f2f2f2;

    margin: 0 auto 0;
    padding-bottom: 25px;


    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: auto;
    .containerTituloMeusHabitos{
        position: fixed;
        top: 70px;
        left:50%;
        transform: translate(-50%);
        //right: auto;
        width: 90%;
        height: 75px;
        //border: 1px solid  red;
        background-color: #f2f2f2;


        display: flex;
        justify-content: space-between;
        align-items: center;

        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;

        button{
            width: 40px;
            height: 35px;
            background: #52B6FF;
            border-radius: 5px;
            border: none;

            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 27px;
            line-height: 34px;
            color: #FFFFFF;
        }
    }

`;

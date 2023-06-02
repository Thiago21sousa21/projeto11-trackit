import styled from "styled-components";
import check from './../../assets/checkbox-sharp.svg';
import { useContext, useState } from "react";
import axios from "axios";
import Contexto from "./../../Contexto/Contexto";

//#E7E7E7  8FC549
export default function TarefaHoje(props) {
    const { e, idx, setArrTarefasHoje } = props;
    const { name, currentSequence, highestSequence, id, done } = e;
    const {token} = useContext(Contexto);
    //console.log(token);
    //console.log(done);
    //const [ feito, setFeito ] = useState(done);

    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const body = {};

    function toggleTarefa(){
        if(done){
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,body, config)
                .then((ans)=>{
                    alert( 'desmarcou');
                })
                .catch((err)=>{
                    console.log(err);
                    alert('deu zebra')});

            axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
                .then((ans)=>{
                    setArrTarefasHoje(ans.data);
                })
                .catch((err)=>console.log(  'deu ruim'));

            
        } else{
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,body, config)
                .then((ans)=>{
                    alert( 'marcou');
                })
                .catch((err)=>{
                    console.log(err);
                    alert('deu zebra')});

            axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
                .then((ans)=>{
                    setArrTarefasHoje(ans.data);
                })
                .catch((err)=>console.log(  'deu ruim'));
    

        }
    }

    return (
        <CsTarefaHoje done={done} >
            <div className="descricao">
                <h1>{name}</h1>
                <h2>Sequência atual: {currentSequence} dias</h2>
                <h2>Seu recorde: {highestSequence} dias</h2>
            </div>
            <div onClick={toggleTarefa} className="moldeIcon">
                <ion-icon name="checkmark-sharp"></ion-icon>
            </div>
            {/* <img src={check} alt="" /> */}
        </CsTarefaHoje>);
}

const CsTarefaHoje = styled.div`
    height: 95px;
    width: 100%;
    background-color: #FFFFFF;

    //border: 1px solid;

    margin-bottom: 10px;

    padding: 13px;
    display: flex;
    justify-content: space-between;
    
    .moldeIcon{
        width: 68px;
        height: 68px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.done ? '#8FC549' : '#E7E7E7'};
        border-radius: 5px;
        //border: 1px solid;
    }
    ion-icon{
        color: white;
        font-size: 28px;
    }
    .descricao{
       // border: 1px solid; 
    }
    h1{
        font-size: 20px;
    }

`;
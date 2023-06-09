import styled from "styled-components";
import check from './../../assets/checkbox-sharp.svg';
import { useContext, useState } from "react";
import axios from "axios";
import Contexto from "./../../Contexto/Contexto";

export default function TarefaHoje(props) {
    const { e, idx, setArrTarefasHoje, setDesligado, desligado } = props;
    const { setQuantidadeTotal, setQuantidadeSelect } = props;
    const { name, currentSequence, highestSequence, id, done } = e;
    const { token, setPorcentagem } = useContext(Contexto);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const body = {};

    function toggleTarefa() {
        setDesligado(true);
        if (done) {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, body, config)
                .then((ans) => {
                    //alert( 'desmarcou');
                    axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
                        .then((ans) => {
                            setDesligado(false);
                            setArrTarefasHoje(ans.data);
                            setQuantidadeTotal(ans.data.length);
                            //console.log(quantidadeTotal, 'total');
                            const newSelect = ans.data.filter(e => e.done);
                            setQuantidadeSelect(newSelect.length);
                            //console.log(quantidadeSelect, 'select');
                            ans.data.length !== 0 && setPorcentagem(newSelect.length / ans.data.length);

                        })
                        .catch((err) => {
                            console.log('deu ruim');
                            console.log(err);

                            //setDesligado(false);
                        });

                })
                .catch((err) => {
                    console.log(err);
                    alert('deu zebra')
                });




        } else {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, body, config)
                .then((ans) => {
                    //alert( 'marcou');
                    axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
                        .then((ans) => {
                            setDesligado(false);
                            setArrTarefasHoje(ans.data);
                            setQuantidadeTotal(ans.data.length);
                            //console.log(quantidadeTotal, 'total');
                            const newSelect = ans.data.filter(e => e.done);
                            setQuantidadeSelect(newSelect.length);
                            //console.log(quantidadeSelect, 'select'); 
                            ans.data.length !== 0 && setPorcentagem(newSelect.length / ans.data.length);



                        })
                        .catch((err) => {
                            console.log('deu ruim');
                            alert(err.response.data.message);
                            //setDesligado(false);
                        });

                })
                .catch((err) => {
                    console.log(err);
                    alert('deu zebra')
                });




        }
    }

    function retornaSequencia() {
        if (done) {
            return (
                <h2 data-test="today-habit-sequence">Sequência atual: <span className="verde"> {currentSequence}dias</span> </h2>
            );
        } else{
            return (
                <h2 data-test="today-habit-sequence">Sequência atual: {currentSequence}dias </h2>
            );
        }
    }

    function retornaRecorde(){
        if(currentSequence === highestSequence && currentSequence > 0 ){
            return(
                <h2 data-test="today-habit-record">Seu recorde: <span className="verde">{highestSequence} dias</span></h2>
            );
        } else{
            return(
                <h2 data-test="today-habit-record">Seu recorde: {highestSequence} dias</h2>
            );
        }
    }

    return (
        <CsTarefaHoje data-test="today-habit-container" done={done} >
            <div className="descricao">
                <h1 data-test="today-habit-name">{name}</h1>
                {retornaSequencia()}
                {retornaRecorde()}
            </div>
            <div data-test="today-habit-check-btn" onClick={desligado ? null : toggleTarefa} className="moldeIcon">
                <ion-icon name="checkmark-sharp"></ion-icon>
            </div>
            {/* <img src={check} alt="" /> */}
        </CsTarefaHoje>);
}

const CsTarefaHoje = styled.div`
    //height: 95px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 5px;

    //border: 1px solid;
    font-family: 'Lexend Deca';
    font-weight: 400;
    color: #666666;

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
        cursor: pointer;    

    }
    ion-icon{
        color: white;
        font-size: 28px;
    }
    .descricao{
        //border: 1px solid; 
       width: 70%;
    }
    h1{
        font-size: 20px;
        margin-bottom: 7px;
    }
    .verde{
        color: #8FC549;
    }
`;
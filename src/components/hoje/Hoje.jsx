import styled from 'styled-components';
import TarefaHoje from './TarefaHoje';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Contexto from './../../Contexto/Contexto';


export default function Hoje() {

    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');  
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const diaDaSemana = diasDaSemana[dataAtual.getDay()];  
    const dataFormatada = `${dia}/${mes}`;



    const [arrTarefasHoje, setArrTarefasHoje] = useState(undefined);
    const { token } = useContext(Contexto);
    const [desligado, setDesligado] = useState(true);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(() => {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
            .then((ans) => {
                setDesligado(false);
                setArrTarefasHoje(ans.data);
            })
            .catch((err) => {
                console.log('deu ruim');
                //setDesligado(false);
            });
    }, []);

    return (
        <CsHoje>
            <div className="molde">
                <div className="tituloHoje">
                    <h1>{diaDaSemana}, {dataFormatada}</h1>
                    <h2>Nenhum hábito concluído ainda</h2>
                    <>{desligado}</>
                </div>

                {arrTarefasHoje === undefined ? (
                    <>carregando...</>
                ) : (
                    arrTarefasHoje.map((e, idx) => (
                        <TarefaHoje
                            setDesligado={setDesligado} desligado={desligado}
                            setArrTarefasHoje={setArrTarefasHoje}
                            key={e.id} e={e} idx={idx}
                        />
                    ))
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
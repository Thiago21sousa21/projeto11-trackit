import { useContext } from "react";
import styled from "styled-components";
import Contexto from "../../Contexto/Contexto";

export default function BotaoHabitoRenderizado(props) {

    //const{diasHabito} = useContext(Contexto);
    const { element, index, days } = props;


    return (
        <CsButton data-test="habit-day" days={days} index={index} >{element}</CsButton>
    );
}

const CsButton = styled.button`
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    width: 30px;
    height: 30px;
    margin-right: 4px;
    background-color: ${(props) => props.days.includes(props.index) ? '#cfcfcf' : '#ffffff'};
    color: ${(props) => props.days.includes(props.index) ? '#ffffff' : '#dbdbdb'};

`; 
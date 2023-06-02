import { useState } from "react";
import styled from "styled-components";


export default function BotaoHabitos(props) {
    const {dia , i, diasHabito, setDiasHabito} = props;
    const [ cor ,setCor]=useState('#FFFFFF');
    const [colorText, setColorText] = useState('#DBDBDB');

    return (
        <CsBotaoHabitos
            cor={cor} colorText={colorText}
            type="button"
            onClick={cor==='#FFFFFF'?
                ()=> {
                        setCor('#CFCFCF');
                        setColorText('#ffffff');
                        diasHabito.push(i);
                        /* console.log(diasHabito)*/

                      } : ()=> {
                                    setCor('#FFFFFF');
                                    setColorText('#dbdbdb');
                                    const newDiasHabito = diasHabito.filter( (e)=> e!==i);
                                    //console.log(newDiasHabito);
                                    setDiasHabito(newDiasHabito);
                                }
            } 
        >

            {dia}
        </CsBotaoHabitos>
    );
}

const CsBotaoHabitos = styled.button`
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    background-color: ${props => props.cor};
    width: 30px;
    height: 30px;
    margin-right: 4px;
    color: ${props => props.colorText}      

`;
import { useState } from "react";
import styled from "styled-components";


export default function BotaoHabitos(props) {
    const {dia , i, diasHabito, setDiasHabito, color, setColor, colorText, setColorText} = props;
    const [ cor ,setCor]=useState('#FFFFFF');


    return (
        <CsBotaoHabitos
            data-test="habit-day"
            i={i}
            color={color} colorText={colorText}
            type="button"
            onClick={color[i]==='#ffffff'?
                ()=> {
                        let newColor = [...color];
                        newColor[i] = '#cfcfcf';
                        //setCor('#CFCFCF');
                        setColor(newColor);

                        let newColorText = [...colorText];
                        newColorText[i] = '#ffffff';
                        setColorText(newColorText);
                        diasHabito.push(i);
                        /* console.log(diasHabito)*/

                      } : ()=> {
                                    let newColor = [...color];
                                    newColor[i] = '#ffffff';
                                    setColor(newColor);

                                    //setCor('#FFFFFF');

                                    let newColorText = [...colorText];
                                    newColorText[i] = '#dbdbdb';
                                    setColorText(newColorText);            

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
    background-color: ${props => props.color[props.i]};
    width: 30px;
    height: 30px;
    margin-right: 4px;
    color: ${props => props.colorText[props.i]} ;
    cursor: pointer;    

`;
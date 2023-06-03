import styled from "styled-components";
import excluir from './../../assets/excluir.svg';
import BotaoHabitoRenderizado from "./BotaoHabitoRenderizado";
import axios from "axios";
import { useContext } from "react";
import Contexto from "../../Contexto/Contexto";

export default function Habito(props){
    const {token} = useContext(Contexto);
    const { e, setArrayHabitos } = props;
    const {days, id , name } = e;
    const dias = ['D','S','T', 'Q', 'Q', 'S', 'S'];

    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    function deletar(){
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
            .then(()=>{
                //alert('deletado');

                axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
                .then((ans)=>{
                    console.log(ans.data);
                    setArrayHabitos(ans.data);
                })
                .catch( (err)=>{
                    alert(err.response.data.message);
                    console.log('ERRO!', err);
                })
            })
            .catch((err)=>{
                console.log(err);
                alert('deu ruim')});
    }


    return(
        <CsHabito>
            <div className="tituloHabito">
                <p>{name}</p>
                <img onClick={deletar} src={excluir} alt="" />
            </div>
            <div className="botoesSemana">
                        {dias.map((element, index)=> <BotaoHabitoRenderizado key={index} days= {days} index={index} element={element}/>)}
                    </div>
        </CsHabito>
    );
}

const CsHabito = styled.div`
    //border: 1px solid;
    width: 100%;
    height: 90px;
    padding: 15px;
    margin: 10px 0px;
    background-color: #ffffff;
    border-radius: 5px;

    .tituloHabito{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .botoesSemana{
            // border: 1px solid;

            width: 90%;

        }
`;
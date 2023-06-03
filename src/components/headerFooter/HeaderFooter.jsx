import { Link } from "react-router-dom";
import styled from "styled-components";
import Contexto from "../../Contexto/Contexto";
import { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function HeaderFooter (){
    const {photo, porcentagem} = useContext(Contexto);
    //console.log(porcentagem);
    return(
    <>
        <Link to='/'>
            <Header>
                <h1>TrackIt</h1>
                <img src={photo} alt="" />
            </Header>
        </Link>
        <Footer>
            
            <Link to='/habitos' className="none ">
                <p>Hábitos</p>
            </Link>
            <Link to='/hoje' className="none ">
                <Ball>
                    <CircularProgressbar 
                        value={porcentagem}
                        maxValue={1}
                        text="hoje"
                        //#52B6FF
                        styles={buildStyles({
                            textColor: '#ffffff',
                            pathColor: '#ffffff',
                            trailColor: '#52B6FF',
                            textSize: '18px'
                        })}
                    />
                </Ball>
            </Link>
            <Link to='/historico' className="none ">
                <p>Histórico</p>
            </Link>

        </Footer>
    </>);
}

const Header = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    z-index: 10;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 5%;

    img{
        border-radius : 50%;
        width: 51px;
        height: 51px;
    }

    font-family: 'Playball';
    font-weight: 400;
    font-size: 39px;
    color: #FFFFFF;
`;
const Footer = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    bottom: 0px;
    z-index: 10;

    padding: 0 9%;
    display: flex;
    justify-content: space-between;
    align-items: center;


    background: #FFFFFF;
    //border: 1px solid black;
    .none{
        text-decoration: none;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
    }
`;
const Ball = styled.div`
    position: absolute;
    width: 91px;
    height: 91px;
    left: 50%;
    bottom: 10px;
    z-index: 10;
    transform: translate(-50%,0);

    background: #52B6FF;
    border-radius: 50%;

    padding: 6px;

`;
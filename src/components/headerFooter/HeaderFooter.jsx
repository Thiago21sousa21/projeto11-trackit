import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HeaderFooter (){
    return(
    <>
        <Link to='/'>
            <Header></Header>
        </Link>
        <Footer>
            
            <Link to='/habitos'>
                <p>Hábitos</p>
            </Link>
            <Link to='/hoje'>
                <Ball></Ball>
            </Link>
            <p>Histórico</p>
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
`;
const Footer = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    bottom: 0px;
    z-index: 10;

    padding: 0 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    background: #FFFFFF;
    border: 1px solid black;
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
`;
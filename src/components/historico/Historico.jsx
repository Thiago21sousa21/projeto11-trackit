import styled from "styled-components";
export default function Historico() {
    return (
        <CsHistorico>
            <div className="molde">
                <div className="titulo">Histórico</div>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </div>
        </CsHistorico>);
}

const CsHistorico = styled.div`
    //border: 1px solid red;
    width: 100%;
    height: 100vh;
    padding: 145px 0 70px;
    background: #E5E5E5;
    .molde{
        width: 90%;
        height: 100%;
        //border: 1px solid;
        margin: 0 auto;

        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        color: #666666;

        .titulo{
            height: 75px;
            width: 90%;
            //border: 1px solid;
            display: flex;
            align-items: center;
            position: fixed;
            top: 70px;
            left: 50%;
            transform: translate(-50%);
            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 23px;
            color: #126BA5;
        }

    }
`;

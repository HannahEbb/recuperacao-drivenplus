import { Link } from "react-router-dom";
import styled from 'styled-components';


export default function Plano ({id, imagem, preco}) {

    const ID_PLANO = id;

    return(
    <>
        <Link  to={`/subscriptons/:${ID_PLANO}`}>
            <Planos>
                <div><img src={imagem} width="140px" height="95px"/></div>
                <h3>R${preco}</h3>
            </Planos>
        </Link>
    </>
    );
}

const Planos = styled.div`
     
    width: 290px;
    height: 180px;
    background-color: var(--cor-fundo-tela);
    border: 3px solid var(--cor-cinza-escuro);
    border-radius: 12px;
    padding-top: 42px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 43px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        font-size: 24px;
        font-weight: 700;
        color: var(--cor-branco);
    } 

`
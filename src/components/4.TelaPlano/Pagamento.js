import React from 'react';
import { useContext } from "react";
import UserContext from "../../UserContext";
import styled from 'styled-components';

export default function Pagamento () {

    const { setIsOpen, nomeCartao, setNomeCartao, 
            numeroCartao, setNumeroCartao, codigoSeguranca, setCodigoSeguranca,
            validade, setValidade } = useContext(UserContext);

   function abrirModal(event) {
    event.preventDefault(); 
    setIsOpen(true);
   }
    
    return(
        <Container>
            <form onSubmit={abrirModal}>
            <input type="text" value={nomeCartao} onChange={e => setNomeCartao(e.target.value)} placeholder="Nome impresso no cartão"></input>
            <input type="text" value={numeroCartao} onChange={e => setNumeroCartao(e.target.value)} placeholder="Dígitos do cartão"></input>
            <div>
                <input type="number" value={codigoSeguranca} onChange={e => setCodigoSeguranca(e.target.value)} placeholder="Código de segurança"></input>
                <input type="text" value={validade} onChange={e => setValidade(e.target.value)} placeholder="Validade"></input>
            </div>
            <button type="submit">ASSINAR</button>
            </form>
        </Container>
    );
}

const Container = styled.div`

    width: 100%;
    height: 100%;
    padding-top: 28px;
    padding-left: 38px;
    padding-right: 38px;
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        justify-content: space-between;
    }

    input {
        width: 100%;
        height: 52px;
        border: none;
        border-radius: 8px;
        background-color: var(--cor-branco);
        margin-bottom: 9px;
        font-size: 14px;
        color: var(--cor-cinza-escuro);
        padding-left: 12px;
        ::placeholder {
            font-size: 14px;
            font-weight: 400;
            color: var(--cor-cinza-claro);
        }
    }

    button {
        width: 100%;
        height: 52px;
        background-color: var(--cor-rosa-driven);
        font-size: 14px;
        font-weight: 700;
        color: var(--cor-branco);
        border: none;
        border-radius: 8px;
        margin-bottom: 24px;
    }

`

import React from 'react';
import { useContext } from "react";
import UserContext from "../../UserContext";
import { useState } from 'react';
import axios from "axios";
import styled from 'styled-components';

export default function Pagamento () {

    const { token, mid } = useContext(UserContext);
    const [nomeCartao, setNomeCartao] = useState("");
    const [numeroCartao, setNumeroCartao] = useState("");
    const [codigoSeguranca, setCodigoSeguranca] = useState("");
    const [validade, setValidade] = useState("");

    function assinarPlano() {
        //post
    }

    return(
        <Container>
        <form onSubmit={assinarPlano}>
            <input type="text" value={nomeCartao} onChange={e => setNomeCartao(e.target.value)} placeholder="Nome impresso no cartão"></input>
            <input type="number" value={numeroCartao} onChange={e => setNumeroCartao(e.target.value)} placeholder="Dígitos do cartão"></input>
            <div>
                <input type="number" value={codigoSeguranca} onChange={e => setCodigoSeguranca(e.target.value)} placeholder="Código de segurança"></input>
                <input type="number" value={validade} onChange={e => setValidade(e.target.value)} placeholder="Validade"></input>
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

    img {
        margin-top: 122px;
        margin-bottom: 100px;
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

    h2 {
        color: var(--cor-branco);
    }
    

`

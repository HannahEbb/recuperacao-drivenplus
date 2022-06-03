import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';

export default function TelaCadastro () {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");

    const navigate = useNavigate();


     function fazerCadastro (event) {
         event.preventDefault();
        
         const signup = {
             email: email,
             name: nome,
             cpf: cpf,
             password: senha
         }
        
         const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up', signup);
         promise.then(res => {
             console.log(res.data);
             navigate('/')}); 
         promise.catch(err => {
             console.log(err);
             alert("Preencha os dados corretamente, por favor.");
         });
        }

    return (
        <Container>
        <form onSubmit={fazerCadastro}>
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="  Nome"></input>
            <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="  CPF"></input>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="  E-mail"></input>
            <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="  Senha"></input>
            <button type="submit">CADASTRAR</button>
        </form>
        <div>
            <Link style={{textDecoration: 'none'}} to="/">
                <h2>Já possui uma conta? Entre</h2>
            </Link>
        </div>
    </Container>
    );
}

const Container = styled.div`

    width: 100%;
    height: 100%;
    padding-top: 147px;
    padding-left: 38px;
    padding-right: 38px;
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        width: 100%;
        height: 52px;
        border: none;
        border-radius: 8px;
        background-color: var(--cor-branco);
        margin-bottom: 16px;
        font-size: 14px;
        color: var(--cor-cinza-escuro);
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


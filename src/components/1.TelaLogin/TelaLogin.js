import React from 'react';
import { useContext } from "react";
import UserContext from "../../UserContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import logo from "../../assets/logo_inicial.png";


export default function TelaLogin () {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const { setToken } = useContext(UserContext);

     const navigate = useNavigate();

     function fazerLogin (event) {
         event.preventDefault(); 

         const login = {
             email: email,
             password: senha
         }
        
         const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', login);
         promise.then(res => {
             setToken(res.data.token);
             console.log(res.data.token);
             {res.data.membership ? navigate('/home') : navigate('/subscriptions') }}); 
             promise.catch(err => {
                 console.log(err);
                 alert("Dados incorretos! Preencha os campos novamente ou cadastre-se primeiro.")});
        }


    return (
        <Container>
            <img src={logo} width="320px" height="62px"/>
            <form onSubmit={fazerLogin}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="  E-mail"></input>
                <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="  Senha"></input>
                <button type="submit">ENTRAR</button>
            </form>
            <div>
                <Link style={{textDecoration: 'none'}} to="/sign-up">
                    <h2>Não possui uma conta? Cadastre-se</h2>
                </Link>
            </div>
        </Container>
    );
}

const Container = styled.div`

    width: 100%;
    height: 100%;
    padding-top: 12px;
    padding-left: 38px;
    padding-right: 38px;
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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


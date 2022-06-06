import React from 'react';
import { useContext } from "react";
import UserContext from "../../UserContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import perfil from "../../assets/perfil.png";


export default function TelaHome () {
    const { token, assinante } = useContext(UserContext);

    //atualiza os valores de plano e infos fazendo uma nova requisição get com o ID_PLANO

    return (
        <>
        <Topo>
            <img src={assinante.membership.image} width="60px" height="60px"/>
            <img src={perfil} width="34px" height="33px"/>
        </Topo>
        <Container>
            <h2>Olá, {assinante.name}</h2>
            <Beneficios>
                {assinante.membership.perks.map(i => {return <button key={i.id}>{i.title}</button>})}
            </Beneficios>
            <Botoes>
                <button onClick={() => {console.log(assinante)}}>Mudar plano</button>
                <button style={{background: '#FF4747'}}>Cancelar plano</button>
            </Botoes>
        </Container>
        
        
        </>
    );
}

const Container = styled.div`

    width: 100%;
    height: 100%;
    padding-top: 12px;
    padding-left: 38px;
    padding-right: 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        color: var(--cor-branco);
        font-size: 24px;
        font-weigth: 700;
        margin-bottom: 53px;
    }
    
`

const Topo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 28px;
    padding-left: 38px;
    padding-right: 22px;
    margin-bottom: 20px;
`

const Beneficios = styled.div`

    button {
        width: 100%;
        height: 52px;
        background-color: var(--cor-rosa-driven);
        font-size: 14px;
        font-weight: 700;
        color: var(--cor-branco);
        border: none;
        border-radius: 8px;
        margin-bottom: 8px;
    }

`

const Botoes = styled.div`

    width: 100%; 
    padding-left: 38px;
    padding-right: 38px;  
    position: fixed;
    bottom: 0px;
    margin-bottom: 4px;

    button {
        width: 100%;
        height: 52px;
        background-color: var(--cor-rosa-driven);
        font-size: 14px;
        font-weight: 700;
        color: var(--cor-branco);
        border: none;
        border-radius: 8px;
        margin-bottom: 8px;
    }

`
import React from 'react';
import { useContext } from "react";
import UserContext from "../../UserContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import xModal from "../../assets/xModal.png";


export default function Modal() {

    const { token, mid, preco, setIsOpen,   
        nomeCartao, numeroCartao, codigoSeguranca, validade } = useContext(UserContext);

    const navigate = useNavigate();

    function assinarPlano() {
         
         const pagamento = {
             membershipId: mid,
             cardName: nomeCartao,
             cardNumber: numeroCartao,
             securityNumber: codigoSeguranca,
             expirationDate: validade
         }

         const config = {
             headers: {
                 Authorization: `Bearer ${token}`
             }
         }
       
         const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', pagamento, config);
         promise.then(() => {
             setIsOpen(false);
             navigate('/home')}); 
             promise.catch(err => {
                 setIsOpen(false);
                 console.log(err);
                 alert("Dados incorretos! Preencha os campos novamente.")});
     }


    return(
        <Container>
            <Topo >
                <img src={xModal} onClick={() => {setIsOpen(false)}}/>
            </Topo>
            <Box>
                <h2>Tem certeza que deseja assinar o plano Driven Plus R$ {preco}?</h2>
                <Botoes>
                    <button style={{background: '#CECECE'}} onClick={() => {setIsOpen(false)}}>Não</button>
                    <button style={{background: '#FF4791'}} onClick={assinarPlano}>Sim</button>
                </Botoes>
            </Box>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;  
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    display: flex;
    flex-direction: column;
    justifay-content: center;
    align-items: center;
`
const Topo = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 26px;
    padding-left: 300px;
`

const Box = styled.div`

    margin-top: 180px;
    width: 248px;
    height: 210px;
    display: flex;
    flex-direction: column;
    padding-top: 33px;
    padding-left: 22px;
    padding-right: 22px;
    background: var(--cor-branco);
    border-radius: 12px;

    h2 {
        font-size: 18px;
        font-weight: 700;
        text-align: center;
        color: #000000;
        line-height: 21px;
        margin-bottom: 43px;
    }

`
const Botoes = styled.div`
    button {
        width: 95px;
        height: 52px;
        color: var(--cor-branco);
        margin-right: 7px;
        border-radius: 8px;
        border: none;
    }
`
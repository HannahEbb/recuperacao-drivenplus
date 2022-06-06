import React from 'react';
import { useContext } from "react";
import UserContext from "../../UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import perfil from "../../assets/perfil.png";


export default function TelaHome () {
    const { token, assinante, setAssinante, nomeCartao, numeroCartao, codigoSeguranca, validade, mid } = useContext(UserContext);

    const navigate = useNavigate();

    function mudarPlano () {

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
        promise.then(res => {
            setAssinante(res.data); 
            navigate('/subscriptions')}); 
            promise.catch(err => {
                console.log(err);
                alert("Problema ao solicitar alteração. Tente novamente mais tarde, por favor.")});
    }

    function cancelarPlano () {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
      
        axios.delete('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', config)
        .then(res => {
        console.log(res); 
        navigate('/subscriptions')}); 
           
    }


    return (
        <>
        <Topo>
            <img src={assinante.membership.image} width="60px" height="60px"/>
            <img src={perfil} width="34px" height="33px"/>
        </Topo>
        <Container>
            <h2>Olá, {assinante.name ? assinante.name : nomeCartao}</h2>
            <Beneficios>
                {assinante.membership.perks.map(i => {return <button onClick={() => window.location.replace(i.link)} key={i.id}>{i.title}</button>})}
            </Beneficios>
            <Botoes>
                <button onClick={mudarPlano}>Mudar plano</button>
                <button onClick={cancelarPlano} style={{background: '#FF4747'}}>Cancelar plano</button>
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
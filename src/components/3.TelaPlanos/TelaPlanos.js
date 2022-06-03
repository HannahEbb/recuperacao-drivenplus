import React from 'react';
import { useContext } from "react";
import UserContext from "../../UserContext";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import Plano from './Plano';

export default function TelaPlanos () {

    const { token } = useContext(UserContext);
    const [planos, setPlanos] = useState([]);

    useEffect(() => {
    
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships';

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const promise = axios.get(URL, config);
        promise.then((response) => {
            const dados = response.data;
            if(dados.length !==0) {
                setPlanos([...dados]); 
            }
        })

    }, []);

    return (
        <Container>
        <h2>Escolha seu Plano</h2>
           {planos.map(plano => {return <Plano key={plano.id} 
                                               id={plano.id} 
                                               imagem={plano.image} 
                                               preco={plano.price}/>})}
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

    h2 {
        font-size: 32px;
        font-weight: 700;
        color: var(--cor-branco);
        margin-top: 18px;
        margin-bottom: 24px;
    }

`
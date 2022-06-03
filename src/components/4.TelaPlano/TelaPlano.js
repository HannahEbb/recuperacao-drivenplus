import React from 'react';
import { useContext } from "react";
import UserContext from "../../UserContext";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import voltar from "../../assets/vector.png";
import drivenPlus from "../../assets/drivenPlus.png";
import Info from './Info';


export default function TelaPlano () {

    const { token } = useContext(UserContext);
    const { ID_PLANO } = useParams();
    const [plano, setPlano] = useState({});
    const [infos, setInfos] = useState([]);
 
    useEffect(() => {

        const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${ID_PLANO}`;

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const promise = axios.get(URL, config);
        promise.then((response) => {
            const dados = response.data;
            const array = response.data.perks;
            if(dados.length !==0) {
                setPlano({...dados});
                setInfos([...array]) 
            }
        })

    }, []);


    return (
        <>
        <Top>
        <img src={voltar} width="28px" height="27.3px"/>
        </Top>
        <Container>
            <img src={plano.image} />
            <div><img src={drivenPlus} width="170px" height="28px"/></div>
            <Infos>
            <h2>Benefícios:</h2>
            {infos.map(i => {return <Info key={i.id} id={i.id} 
                                            mid={i.membershipId}
                                            texto={i.title}
                                            link={i.link}/>})}
            </Infos>
            <h2>Preço:</h2>
            <h3>R${plano.price} cobrados mensalmente</h3>
        
        </Container>
        </>
    );
}

const Top = styled.div`

    width: 100%;
    padding-top: 25px;
    padding-left: 22px;

`
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

    div {
        margin-top: 18px;
        margin-left: 30px;
    }

`

const Infos = styled.div`
    color: white;

`

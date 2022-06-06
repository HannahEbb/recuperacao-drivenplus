import React from 'react';
import { useContext } from "react";
import UserContext from "../../UserContext";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import voltar from "../../assets/vector.png";
import checklist from "../../assets/clipboard.png";
import dinheiro from "../../assets/money.png";
import drivenPlus from "../../assets/drivenPlus.png";
import Info from './Info';
import Pagamento from './Pagamento';

export default function TelaPlano () {

    const { token, setMid, setPreco } = useContext(UserContext);
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
                setInfos([...array]);
                setMid(array[0].membershipId);
                setPreco(dados.price);
            }
        })

    }, []);


    return (
        <>
        <Top>
            <Link to="/subscriptions">
            <img src={voltar} width="28px" height="27.3px"/>
            </Link>
        </Top>
        <Logo>
            <img src={plano.image} />
            <div><img src={drivenPlus} width="170px" height="28px"/></div>
        </Logo>
        <Beneficios>
            <div><img src={checklist}/><h2>Benefícios:</h2></div>
            {infos.map(i => {return <Info key={i.id} id={i.id} 
                                            membershipId={i.membershipId}
                                            texto={i.title}
                                            link={i.link}/>})}
        </Beneficios>
        <Precos>
            <div><img src={dinheiro}/><h2>Preço:</h2></div>
            <h3>R${plano.price} cobrados mensalmente</h3>
        </Precos>
        <Pagamento/>
        </>
    );
}

const Top = styled.div`

    width: 100%;
    padding-top: 25px;
    padding-left: 22px;

`
const Logo = styled.div`

    width: 100%;
    height: 100%;
    padding-top: 12px;
    padding-left: 38px;
    padding-right: 38px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        margin-top: 18px;
        margin-left: 30px;
    }

`

const Beneficios = styled.div`
    color: white;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    padding-left: 44px;
    margin-bottom: 12px;

    div {
        display: flex;
        margin-bottom: 10px;
    }

    img {
        margin-right: 5px;
    }

`

const Precos = styled.div`
    color: white;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    padding-left: 44px;

    div {
        display: flex;
        margin-bottom: 10px;
    }

    img {
        margin-right: 5px;
    }

`

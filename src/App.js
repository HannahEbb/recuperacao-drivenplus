import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import { useState } from "react";
import UserContext from "./UserContext";
import TelaLogin from "./components/1.TelaLogin/TelaLogin";
import TelaCadastro from "./components/2.TelaCadastro/TelaCadastro";
import TelaPlanos from "./components/3.TelaPlanos/TelaPlanos";
import TelaPlano from "./components/4.TelaPlano/TelaPlano";
import TelaHome from "./components/5.TelaHome/TelaHome";
import Modal from "./components/4.TelaPlano/Modal";


//Modal.setAppElement('.root')


export default function App() {

    const [token, setToken] = useState("");
    const [mid, setMid] = useState("");
    const [nomeCartao, setNomeCartao] = useState("");
    const [numeroCartao, setNumeroCartao] = useState("");
    const [codigoSeguranca, setCodigoSeguranca] = useState("");
    const [validade, setValidade] = useState("");
    const [ preco, setPreco ] = useState("");

    const [modalIsOpen, setIsOpen] = useState(false);
    

    const contextValue = { token, setToken, 
                            mid, setMid,
                            preco, setPreco,
                            nomeCartao, setNomeCartao,
                            numeroCartao, setNumeroCartao,
                            codigoSeguranca, setCodigoSeguranca,
                            validade, setValidade,
                            modalIsOpen, setIsOpen };

    return (

        <UserContext.Provider value={contextValue}>

        <BrowserRouter>
                {modalIsOpen ? <Modal/> : null}
            <Routes>
                <Route path="/" element={<TelaLogin />} />
                <Route path="/sign-up" element={<TelaCadastro />} />
                <Route path="/subscriptions" element={<TelaPlanos />} />
                <Route path="/subscriptions/:ID_PLANO" element={<TelaPlano />} />
                <Route path="/home" element={<TelaHome />} />
            </Routes>
        </BrowserRouter>

        </UserContext.Provider>

    );
}


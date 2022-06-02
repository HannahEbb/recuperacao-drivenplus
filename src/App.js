import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./UserContext";
import TelaLogin from "./components/1.TelaLogin/TelaLogin";
import TelaCadastro from "./components/2.TelaCadastro/TelaCadastro";
import TelaPlanos from "./components/3.TelaPlanos/TelaPlanos";
import TelaPlano from "./components/4.TelaPlano/TelaPlano";
import TelaHome from "./components/5.TelaHome/TelaHome";


export default function App() {

    const [token, setToken] = useState("");
    const contextValue = { token, setToken };


    return (

        <UserContext.Provider value={contextValue}>

        <BrowserRouter>
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
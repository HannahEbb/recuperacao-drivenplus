import React from 'react';
import { useContext } from "react";
import UserContext from "../../UserContext";

export default function Info ({id, membershipId, texto, link}) {

    // const { setMid } = useContext(UserContext);

    // setMid(membershipId);

    return (
        <h2>{id}. {texto}</h2>
    );
}
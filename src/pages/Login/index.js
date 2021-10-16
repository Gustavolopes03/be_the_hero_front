import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import heroes from "../../assets/heroes.png";
import voltar_login from "../../assets/voltar_login.svg";
import api from "../../service/api";
import { useHistory } from "react-router-dom";

import './style.css';
import { useState } from "react/cjs/react.development";

export default function Login(){

    const [id, setId] = useState("");
    const history = useHistory();

    async function handleLogin(e) {

        e.preventDefault();

        try{

            const response = await api.get(`/ongs/${id}`);

            localStorage.setItem("#be_the_hero:ongId", id);
            localStorage.setItem("#be_the_hero:ongName", response.data.ongToken.name);
            localStorage.setItem("#be_the_hero:ongToken", response.data.ongToken.token);

            history.push("/occ");

        } catch (err) {
            alert("Falha ao Logar", err);
        };

    }

    return(
    <div className="Wraper_Log">
        <img className="logo" src={logo} alt=""/>
        <h1>Fassa seu Login</h1> 
        <form onSubmit={handleLogin} >
            <input 
            type="text" 
            placeholder="Sua ID"
            value={id}
            onChange={e=>setId(e.target.value)}
            ></input>
            <button type="submit"  >Cadastro</button>
        </form>
        <img className="voltar_login" src={voltar_login} alt=""/>
        <Link to='/register' >Não Tenho Cadastro</Link>
        <img className="heroes" src={heroes} alt=""/>
    </div>
    );
}
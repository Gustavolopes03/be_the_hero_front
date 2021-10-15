import '../Login/style.css'
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import heroes from "../../assets/heroes.png"
import voltar_login from "../../assets/voltar_login.svg"

export default function Login(){
    return(
    <div className="Wraper">
        <img className="logo" src={logo} alt=""/>
        <h1>Fassa seu Login</h1>
        <input type="text" placeholder="Sua ID" ></input>
        <button type="submit" >Cadastro</button>
        <img className="voltar_login" src={voltar_login} alt=""/>
        <Link to='/register' >Não Tenho Cadastro</Link>
        <img className="heroes" src={heroes} alt=""/>
    </div>
    );
}
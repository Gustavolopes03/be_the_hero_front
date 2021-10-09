import '../Register/style.css'
import React, { useState } from "react";
import logo from '../../assets/logo.svg';
import voltar from '../../assets/voltar.svg'
// import api from "../../service/api";


export default function Register(){
    const [ name, setName ] = useState(""); 
    const [ email, setEmail ] = useState("");
    const [ whatsapp, setWhatsapp ] = useState("");
    const [ city, setCity ] = useState("");
    const [ uf, setUf ] = useState("");
    async function handleRegister(e){
        e.preventDefault();
        const data = {name,email,whatsapp,city,uf};
        console.log(data)
        // const response = await api.post("ongs",data);
    }

    return(
        <form className="Wraper" onSubmit={ handleRegister }>
            <div className="Content">
                <img className="logo" src={logo} alt=""/>
                <div className="text" >
                    <h1 className="register" >Cadastro</h1>
                    <br></br>
                    <h3>
                        Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
                    </h3>
                    <br></br>
                <div className="backtext">
                    <img src={voltar} alt="" />
                    <a href="/" >
                        <h3>Volte para o Login</h3>
                    </a>
                    </div> 
                </div>
            </div>
            <div className="Inputs">
                <input type="text" placeholder="Nome da ONG" value={name} onChange={e=>setName(e.target.value)} ></input>
                <br></br>
                <input type="text" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} ></input>
                <br></br>
                <input type="text" placeholder="WhatsApp" value={whatsapp} onChange={e=>setWhatsapp(e.target.value)} ></input>
                <br></br>
                <input className="city" type="text" placeholder="Cidade" value={city} onChange={e=>setCity(e.target.value)} ></input>
                <input className="uf" type="text" placeholder="UF" value={uf} onChange={e=>setUf(e.target.value)} ></input>
                <br></br>
                <button type="submit" >Cadastro</button>
            </div>
  
        </form>
    )
}
import React, { useState } from "react";
import api from "../../service/api";


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
        const response = await api.post("ongs",data);
    }

    return(
        <form onSubmit={ handleRegister }>
            <input type="text" placeholder="Nome da Ong" value={name} onChange={e=>setName(e.target.value)} ></input>
            <input type="text" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} ></input>
            <input type="text" placeholder="WhatsApp" value={whatsapp} onChange={e=>setWhatsapp(e.target.value)} ></input>
            <input type="text" placeholder="Cidade" value={city} onChange={e=>setCity(e.target.value)} ></input>
            <input type="text" placeholder="UF" value={uf} onChange={e=>setUf(e.target.value)} ></input>
            <button type="submit" >Registrar</button>
        </form>
    )
}
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../service/api";

import "./style.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const data = { name, email, whatsapp, city, uf };

    try {
      console.log(data);
      const response = await api.post("/ongs", data);
      alert(`Seu ID de acesso: ${response.data.ong.id}`);
      history.push("/");
    } catch (error) {
      alert("Erro no cadastro, tente novamente");
    }
  }

  return (
    <div className="register-conteiner">
      <div className="content">
        <section>
          <img src={logo} alt="" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link className="back-link" to="/occ/register"> {/*arrumar link*/}
            <FiArrowLeft size={16} color="#E02041" />
            Volte para o login
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <div className="input-group">
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              style={{ width: 80 }}
              placeholder="UF"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>
          <button type="submit" className="button">
            Cadastro
          </button>
        </form>
      </div>
    </div>
  );
}

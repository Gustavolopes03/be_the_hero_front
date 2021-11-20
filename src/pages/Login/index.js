import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../service/api";
import "./style.css";

import logo from "../../assets/logo.svg";
import heroes from "../../assets/heroes.png";
import { FiLogIn } from "react-icons/fi";

export default function Login() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.get(`/ongs/${id}`);

      localStorage.setItem("#be_the_hero:ongId", id);
      localStorage.setItem("#be_the_hero:ongName", response.data.ongToken.name);
      localStorage.setItem(
        "#be_the_hero:ongToken",
        response.data.ongToken.token
      );


      history.push("/occ");
    } catch (err) {
      console.log(err)
      alert("Falha ao Logar", err);
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu Login</h1>
          <input
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit" onClick="">
            Login
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            <h3>Não Tenho Cadastro</h3>
          </Link>
        </form>
      </section>
      <img src={heroes} alt="" />
    </div>
  );
}

import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";

import logo from "../../assets/logo.svg";
import power from "../../assets/power.svg";

import api from "../../service/api"
import "../Occurrences/style.css";

export default function Occurrences() {
  const [occurences,setOccurences] = useState([]);
  const history = useHistory();

  const ongName = localStorage.getItem("#be_the_hero:ongName");
  const ongToken = localStorage.getItem("#be_the_hero:ongToken");

  useEffect(() => {
    api.get('occ/', {
      headers: {
        Authorization: `Bearer ${ongToken}`,
      }
    }).then(response => {
      setOccurences(response.data.occurences);
    });
}, []);

  function deleteOccurence (id) {
    try {
      api.delete(`occ/${id}` , {
        headers:{
          Authorization: `Bearer ${ongToken}`,
        }
      });
      window.location.reload()
    }

    catch (err) {
      alert("Erro ao Deletar")
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }
  
  return (
    <div className="occ-conteiner">
      <div className="occ-content">
        <header>
          <img className="logo" src={logo} alt="" />
          <h1>Bem vindo, {ongName}</h1>
          <Link to="/occ/register">
            <button className="button" type="submit">
              Cadastrar novo caso
            </button>
          </Link>
            <button className="logoff" type="submit" onClick={handleLogout}>
              <img src={power} alt="" />
            </button>
        </header>

        <h1>Casos Cadastrasdos</h1>
        <ul>
          
          {occurences.map(occurences => (
            <li key={occurences.id}>
              
                <div className="box">
                  <div className="title-content" >

                    <h2>Caso:</h2>
                    <p>{occurences.title}</p>

                  </div>

                    <h2>Descrição:</h2>
                    <p>{occurences.description}</p>
                    
                  <div className="value-content" >

                    <h2>Valor:</h2>
                    <p>{occurences.value}</p>

                  </div>
                  <button onClick={() =>deleteOccurence(occurences.id)} type="button" className="deleteocc">
                    <FiTrash2 size={20} color="#a8a8b3"/>
                  </button>
              </div>
            </li>))}
          
        </ul>

      </div>
    </div>
  );
}

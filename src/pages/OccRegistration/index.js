import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logo from "../../assets/logo.svg";

import api from "../../service/api"
import "../OccRegistration/style.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function OccRegistration() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const ongToken = localStorage.getItem('#be_the_hero:ongToken')
  const history = useHistory();

  async function handleOccRegistration(e){
    e.preventDefault();

      const data = {
        title,
        description,
        value
      };

      try {
        await api.post('/occ/', data, {
          headers: {
            Authorization: `Bearer ${ongToken}`
          }
        });

        console.log(data)

        history.push('/occ');
      } catch (err) {
        alert('Erro no cadastrar caso, tente novamente');
      }
    }

  function reloadWindow () {
    window.location.reload()
  }

  return (
    <div className="occ-reg-conteiner" >
      <div className="content" >
        <section>
          <img src={logo} alt="" />

          <h1>Cadastrar novo Caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

            <Link className="back-link" to="/occ">
              <FiArrowLeft size={16} color="#E02041" />
              <h3>Voltar para Home</h3>
            </Link>

            <form onSubmit={handleOccRegistration}>

              <input 
              placeholder="Título do Caso" 
              value={title}
              onChange={e => setTitle(e.target.value)}
              />

              <textarea placeholder="Descrição"
              value={description}
              onChange={e => setDescription(e.target.value)}
              />

              <input 
              placeholder="Valor em Reais"
              value={value}
              onChange={e => setValue(e.target.value)}
              />

              <div className="button-group">

              <button className="button-t2" onClick={reloadWindow} >
                Cancelar
              </button>

              <button className="button" type="submit" >
                Cadastrar
              </button>
              </div>

            </form>
          </section>
      </div>
    </div>
  );
}

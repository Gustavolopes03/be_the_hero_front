
import { Link } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import logo from "../../assets/logo.svg";

import "../OccRegistration/style.css"


export default function occRegistration() {
  return (
    <div className="occ-reg-conteiner" >
      <div className="content" >
        <section>
          <img src={logo} alt="" />

          <h1>Cadastrar novo Caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

            <Link className="back-link" to="/register">
              <FiArrowLeft size={16} color="#E02041" />
              <h3>Voltar para Home</h3>
            </Link>

            <form>

              <input placeholder="Título do Caso" />
              <textarea placeholder="Descrição" />
              <input placeholder="Valor em Reais" />

              <div className="button-group">
              <Link to="">
                <button className="button-t2">
                  Cancelar
                </button>
              </Link>
              <button className="button" type="submit" onClick="">
                Cadastrar
              </button>
              </div>

            </form>
          </section>
      </div>
    </div>
  );
}

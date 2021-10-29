import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import power from "../../assets/power.svg";

import "../Occurrences/style.css";

export default function Occurrences() {
  const name = localStorage.getItem("#be_the_hero:ongName");
  const tytle = localStorage.getItem("#be_the_hero:tytle");
  const description = localStorage.getItem("#be_the_hero:description");
  const value = localStorage.getItem("#be_the_hero:value");

  return (
    <div className="occ-conteiner">
      <div className="occ-content">
        <header>
          <img className="logo" src={logo} alt="" />
          <h1>Bem vindo, {name}</h1>
          <button className="button" type="submit">
            Cadastrar novo caso
          </button>
          <Link to="/">
            <button className="logoff" type="submit" href="/">
              <img src={power} alt="" />
            </button>
          </Link>
        </header>
        <div className="occ-box-wrapper">
          <h1>Casos Cadastrasdos</h1>
          <div className="box">
            <div className="box-content">
              <h2>Caso:</h2>
              <h3>{tytle}</h3>

              <h2>Descrição:</h2>
              <p>{description}</p>

              <h2>Valor:</h2>
              <h3>{value}</h3>
            </div>
          </div>

          {/* <script>
            function multiplyNode(node, count, deep) {
                for (var i = 0, copy; i < count - 1; i++) {
                copy = node.cloneNode(deep);
                node.parentNode.insertBefore(copy, node);
                }
            }
        </script> */}
        </div>
      </div>
    </div>
  );
}

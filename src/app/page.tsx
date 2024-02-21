import { Header } from "./components/header/header";

import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header />
      <div className="experiencia">
        <h3>Experiência </h3>
        <p>Sou o Thiago, tenho 23 anos, estudo desenvolvimento de software back end e front end. Estou em
          busca da minha primeira experiência profissional na área de tecnologia.
          Atualmente desenvolvo projetos com Django utilizando API/REST com os métodos HTTP GET e
          POST, integrando com banco de dados relacional disponibilizado pela framework. Também
          desenvolvo projetos responsivos com JavaScript, HTML e CSS.</p>
        <div className="tempo-experiencia">

        </div>
        <div className="infos">
          <h3>Linguagens</h3>
          <div className="infos-linguagens">
            <span>PT-BR - Língua Nativa </span>
            <span>EN - Básico</span>
          </div>
          <h3>Educação</h3>
          <div className="infos-educacao">
            <span>Desenvolvimento Back End – Unopar
            </span>
            <span></span>
          </div>

        </div>
        <div className="buttons">
          <div className="social">
          </div>
          <button>Contate - me</button>
        </div>
      </div>
    </main >
  );
}

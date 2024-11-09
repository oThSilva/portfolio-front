import "./projects.scss"

export function Projects() {
    return (
        <div>
            <div className="projects-style" >
                <h3>Projetos </h3>

                <h3><br />Projeto Automação de teste</h3>
                <p className="django-link">
                    Projeto de testes automatizados com Robot Framework para o site English Pass. O objetivo do projeto é assegurar a qualidade, garantindo o cumprimento dos critérios de aceite.
                    <br />
                    Tecnologias: Robot Framework, Python.
                </p>
                <a href="https://github.com/oThSilva/Automacao-English-Pass" target="_blank">Link do repositório</a>

                <h3> <br /> Portfolio Front End</h3>
                <p>
                    Este é um website de apresentação profissional responsivo. O site lista as tecnologias com as quais tenho conhecimento e foi criado para destacar minhas habilidades e experiências.
                    <br />
                    Tecnologias: React.js, Next.js, Sass, TypeScript.
                </p>
                <a href="https://github.com/oThSilva/portfolio-front" target="_blank">Link do repositório</a>
                <br />

                <h3>Banco de Dados SQLite3</h3>
                <p>
                    Desenvolvi um sistema de gerenciamento de clientes utilizando o banco de dados SQLite3. Foi desenvolvido com o framework Python DB API para demonstrar a manipulação de dados em um banco de dados relacional.
                    <br />
                    Tecnologias: Python DB API.

                </p>
                <a href="https://github.com/oThSilva/Python-DB-APi?tab=readme-ov-file#tecnologias-utilizadas" target="_blank">Link do repositório</a>
                <br />
                <h3>Projeto Django</h3>
                <p className="django-link">
                    Este projeto é um sistema de pesquisa desenvolvido com o framework Django. Ele utiliza o banco de dados SQLite e implementa os métodos HTTP GET e POST para permitir a escolha de uma ou mais opções de uma determinada pergunta. O projeto foi feito seguindo a documentação oficial do Django.
                    <br />
                    Tecnologias: Django, Python.
                </p>
                <a href="https://github.com/oThSilva/projeto-django" target="_blank">Link do repositório</a>
                <br />
            </div>
        </div >
    )
}
import "./projects.scss"

export function Projects() {
    return (
        <div>
            <div className="projects-style" >
                <h3>Projetos </h3>

                <h3><br />Automação English Pass</h3>
                <p className="django-link">
                    Automação de 15 cenários de testes para funcionalidades de cadastro e login do site English
                    Pass, com fluxos End-to-End (E2E). A geração de evidências é feita automaticamente,
                    utilizando Microsoft Office para documentar o status de cada execução. Validação de
                    performance e qualidade no processo de testes, aplicando testes de regressão e
                    exploratórios.
                    <br />
                    Tecnologias: Robot Framework, Selenium Library ,Python.
                </p>
                <a href="https://github.com/oThSilva/Automacao-English-Pass" target="_blank">Link do repositório</a>

                <h3> <br /> Testes de API (DummyJSON) </h3>
                <p>
                    Desenvolvimento de testes automatizados para os serviços de API do site DummyJSON,
                    cobrindo operações CRUD. Realização de testes funcionais e negativos, com uso de Postman
                    para garantir a integridade da comunicação entre cliente e servidor. Criação de cenários
                    de teste e massa de dados para validar a API, incluindo testes de integração entre os
                    serviços e validação de payloads, headers e responses.
                    <br />
                    Tecnologias: Robot Framework, Request Library, Ptyhon.
                </p>
                <a href="https://github.com/oThSilva/API-Automation" target="_blank">Link do repositório</a>
                <br />

                <h3>Automação com Playwright</h3>
                <p>
                    Implementação de testes automatizados para o site Buger Eats, utilizando Playwright
                    com TypeScript e seguindo a arquitetura Page Object Model (POM). Os testes incluem
                    cenários funcionais, de regressão e exploratórios, além de casos de integração.
                    Utilização de Git para versionamento e integração com GitHub Actions para CI/CD.
                    <br />
                    Tecnologias:  Playwright, TypeScript, Cucumber, GitHub Actions.

                </p>
                <a href="https://github.com/oThSilva/Projeto-playwright" target="_blank">Link do repositório</a>
                <br />
                <h3>Portfolio Front End</h3>
                <p className="django-link">
                    EEste é um website de apresentação profissional responsivo. O site lista as tecnologias com as quais tenho conhecimento e foi criado para destacar minhas habilidades e experiências.
                    <br />
                    Tecnologias: eact.js, Next.js, Sass, TypeScript.
                </p>
                <a href="https://github.com/oThSilva/portfolio-front" target="_blank">Link do repositório</a>
                <br />
            </div>
        </div >
    )
}
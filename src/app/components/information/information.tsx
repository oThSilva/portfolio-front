import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info() {
    return (
        <div className="infos">

            <SectionTitle text="Hard Skills " />
            <div className="infos-linguagens">
                <span>Testes manuais (funcionais, regressão, exploratórios, negativos)</span>
                <span>Automação com Playwright + TypeScript, Robot Framework, Selenium</span>
                <span>Testes de API com Postman e automação</span>
                <span>Testes de carga com K6</span>
                <span>Análise de logs com DevTools, OpenSearch, Clarity, Grafana</span>
                <span>SQL Server, MongoDB</span>
                <span>Git, GitHub Actions, CI/CD, Scrum, Kanban</span>
            </div>
            <SectionTitle text="Soft Skills " />
            <div className="infos-linguagens">
                <span>Comunicação clara e colaboração em equipe</span>
                <span>Organização e documentação</span>
                <span>Proatividade e pensamento crítico</span>
                <span>Foco em resultados e melhoria contínua</span>
            </div>
            <SectionTitle text="Idiomas" />
            <div className="infos-linguagens">
                <span>PT-BR - Língua Nativa </span>
                <span>INGLÊS - Básico intermediário</span>
            </div>
            <SectionTitle text="Educação" />
            <div className="infos-educacao">
                <p> Inglês | British Council | 2024 – Cursando <br />
                    <br /> Teste de Software | Coursera | 2024 <br />
                    <br /> Tecnologo em Desenvolvimento Back-End | UNOPAR | 2022 – 2024 <br />
                    <br /> Técnico em hardware | Senac | 2015
                </p>
            </div>

        </div>
    )
}
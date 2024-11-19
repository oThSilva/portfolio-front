import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info() {
    return (
        <div className="infos">

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
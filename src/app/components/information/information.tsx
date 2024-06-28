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
                <p> English Online - British Council - Cursando
                    <br /> Python AI Backend Developer - DIO - Cursando
                    <br /> Fundamentos de IA para Devs - DIO - Cursando
                    <br /> Tecnologo em Desenvolvimento Back End – Unopar - 06/2024
                </p>
                {/* <ul>
                    <li>English Online - British Council - Cursando</li>
                    <li>Python AI Backend Developer - Digital Innovation One - Cursando</li>
                    <li>Fundamentos de IA para Devs - Digital Innovation One - Cursando</li>
                    <li>Tecnologo em Desenvolvimento Back End – Unopar - 06/2024</li>
                </ul> */}
            </div>

        </div>
    )
}
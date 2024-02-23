import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info() {
    return (
        <div className="infos">

            <SectionTitle text="Idiomas" />
            <div className="infos-linguagens">
                <span>PT-BR - Língua Nativa </span>
                <span>EN - Básico</span>
            </div>
            <SectionTitle text="Educação" />
            <div className="infos-educacao">
                <span>Desenvolvimento Back End – Unopar
                </span>
                <span></span>
            </div>

        </div>
    )
}
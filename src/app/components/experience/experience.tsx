import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";

import "./experience.scss"

export function Experience() {
    return (
        <div className="experiencia">
            <SectionTitle text="Experiência" />
            <p>
                Eu sou Thiago, 23 anos, estudante de desenvolvimento de software com foco em back end e front end. Procuro minha primeira oportunidade profissional em tecnologia. Atualmente, trabalho em projetos utilizando React e Django, aplicando API/REST com métodos HTTP GET e POST, e integro com bancos de dados relacionais. Além disso, desenvolvo projetos responsivos com JavaScript, HTML e CSS.</p>
            <div className="tempo-experiencia">
                <div className="experience-language">
                    <Image
                        src="/JavaScript.png"
                        alt="javaScript logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2"><span> 6 meses </span>
                        </div>
                    </div>
                </div>
                <div className="experience-language">
                    <Image
                        src="/react.png"
                        alt="react logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-3"> <span> 3 meses </span>
                        </div>
                    </div>
                </div>
                <div className="experience-language">
                    <Image
                        src="/python.png"
                        alt="Python logo" width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1"> <span> 1 ano </span>
                        </div>
                    </div>
                </div>
                <div className="experience-language">
                    <Image
                        src="/django.png"
                        alt="Django logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2"> <span> 6 meses </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";

import "./experience.scss"

export function Experience() {
    return (
        <div className="experiencia">
            <SectionTitle text="Experiência" />
            <p>Sou o Thiago, tenho 23 anos, estudo desenvolvimento de software back end e front end. Estou em
                busca da minha primeira experiência profissional na área de tecnologia.
                Atualmente desenvolvo projetos com Django utilizando API/REST com os métodos HTTP GET e
                POST, integrando com banco de dados relacional disponibilizado pela framework. Também
                desenvolvo projetos responsivos com JavaScript, HTML e CSS.</p>
            <div className="tempo-experiencia">
                <div className="experience-language">
                    <Image
                        src="/js.png"
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
                        alt="Python logo"
                        width={40}
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
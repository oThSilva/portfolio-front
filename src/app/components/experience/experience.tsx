import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";

import "./experience.scss"

export function Experience() {
    return (
        <div className="experiencia">
            <p>
                Olá, seja bem-vindo(a) à minha página web! Aqui, você encontrará informações sobre mim e minhas habilidades. <br />

                Meu nome é Thiago, tenho 24 anos. Meu objetivo é trabalhar com desenvolvimento de sistemas, sou formado em desenvolvimento back end e tenho um sólido conhecimento em Front End.

                Tenho experiência no desenvolvimento de websites com Django, criação e consumo de APIs REST e conhecimento prático em Python. Realizo integração com bancos de dados relacionais, como SQLite e MySQL. Também desenvolvo projetos responsivos utilizando JavaScript, HTML e CSS, usando tecnologias como React, Next.js, Sass e TypeScript.


                {/* Eu sou Thiago, tenho 24 anos, sou formado em desenvolvimento back end e tenho conhecimento em Front End. Procuro minha primeira oportunidade profissional em tecnologia. Atualmente, faço  projetos utilizando React, Django, aplicando API/REST, faço integração com bancos de dados relacionais. Além disso, desenvolvo projetos responsivos com JavaScript, HTML e CSS. */}
            </p>
        </div>
    )
    {/* <div className="tempo-experiencia">
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
                        </div> */}

    //             </div >
    //         </div >
    //     </div >
    // )
}
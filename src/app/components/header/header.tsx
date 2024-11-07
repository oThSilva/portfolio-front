import Image from "next/image";
import "./header.scss"

export function Header() {
    return (
        <div className="header">
            <div>
                <h1>Thiago Silva</h1>
                <h2>Analista de Qualidade (QA, QAE)</h2>
                {/* <Image
                    src="/me.jpg"
                    alt="Minha foto"
                    width={325}
                    height={315}
                    priority
                /> */}
            </div>
        </div>
    )
}
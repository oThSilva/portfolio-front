import Image from "next/image";
import "./header.scss"

export function Header() {
    return (
        <div className="header">
            <div>
                <h1>Oi, eu sou o Thiago</h1>
                <h2>Desenvolvedor Full Stack</h2>
                <Image
                    src="/me.jpg"
                    alt="Minha foto"
                    width={325}
                    height={315}
                    priority
                />
            </div>
        </div>
    )
}
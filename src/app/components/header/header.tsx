import Image from "next/image";
import "./header.scss"

export function Header() {
    return (
        <div className="header">
            <div>
                <h1>Meu nome é Thiago</h1>
                <h2>Desenvolvedor Back-End/Front-End</h2>
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
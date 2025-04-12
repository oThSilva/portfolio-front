import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { WhatsIcon } from "../icons/whats-icon";


import "./social-btns.scss"
interface SocialBtnsProps {

}
export function SocialBtns(props: SocialBtnsProps) {
    return (
        <div className="conteiner">
            <div className="social">
                <a href="https://github.com/oThSilva" target="_black">
                    <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/thiago-pereira-a19090165/" target="_blank">
                    <LinkedInIcon />
                </a>
                <a href="https://wa.me/14991095802" target="_black" >
                    <WhatsIcon />
                </a>
            </div>
        </div>
    )
}
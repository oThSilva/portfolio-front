import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";


import "./social-btns.scss"
interface SocialBtnsProps {

}
export function SocialBtns(props: SocialBtnsProps) {
    return (
        <div className="social">
            <a href="https://github.com/oThSilva" target="_black">
                <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/thiago-pereira-a19090165/" target="_blank">
                <LinkedInIcon />
            </a>
            <a href="https://mega.nz/file/OqgSmKKI#TJy7cG8nphQheRV0f4yy5-AQ5ng6RDy7VzNdG8CM2oA" target="_black" >CV</a>
        </div>
    )
}
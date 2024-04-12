import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { CvIcon } from "../icons/cv-icon";


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
            <a href="https://mega.nz/file/GmZzwJAQ#sfyNk3Rl3jsZ3g4TXsfeNgSpJm0kp_hMjwSsZzceP_c" target="_black" >
                <CvIcon />
            </a>
        </div>
    )
}
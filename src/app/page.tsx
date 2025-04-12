import Image from "next/image";
import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Info } from "./components/information/information";
import "./styles/home.scss"
import { EmailIcon } from "./components/icons/email-icon";
import { SocialBtns } from "./components/social-btns/social-btns"
import { Projects } from "./components/My-projects/projects"


export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Projects />
      <Info />
      <div className="buttons">
        <SocialBtns />
        <a className="btn-primary" href="mailto:thipereira.silva@hotmail.
        com">E-mail
          <EmailIcon />
        </a>

      </div>
    </main >
  );
}

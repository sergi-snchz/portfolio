import coding from "../img/coding.jpg";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function About({ theme }) {
  return (
    <div className="mx-5 mt-10 max-w-6xl xl:mx-auto lg:flex lg:justify-between">
      <div className="lg:w-2/5">
        <div>
          <h2 className={"text-center text-lg font-medium mb-5 " + theme.textColor}>More About Me</h2>
          <p className={"leading-7 text-justify " + theme.textColor}>I build new projects just to tickle my brain. Developing a website or any other software related project includes designing the layout, user interface, defining the site's architecture and much more. Doing such designs is never an easy task but doings things you are not 100% ready is when real growth starts to happen.</p>
          <p className={"mt-5 leading-7 text-justify " + theme.textColor}>While I keep myself busy doing software projects. I enjoy playing with computers at the software and hardware level. I also enjoy watching sports in my free time.</p>
        </div>
        <div>
          <h2 className={"text-center text-lg font-medium m-5 " + theme.textColor}>TOP EXPERTISE</h2>
          <p className={"leading-7 text-justify " + theme.textColor}>Fullstack developer with primary focus on React, Node.js with Express.js and MariaDB</p>
          <div className={"flex justify-around mt-5 pt-5 pb-5 leading-7 rounded shadow-lg " + theme.expertiseBackground + " " + theme.textColor}>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>HTML/CSS</li>
              <li>TailwindCSS</li>
            </ul>
            <ul>
              <li>Python</li>
              <li>Linux</li>
              <li>MariaDB</li>
              <li>Heroku</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:w-2/5 lg:flex lg:flex-col lg:gap-3 lg:justify-center">
        <img src={coding} className="my-10 mx-auto hidden lg:block rounded shadow-lg" alt=""/>
        <div className={"flex flex-col gap-2 justify-between text-center mt-5 lg:mt-0 " + theme.textColor} id="find-me">
          <h2>Find me on GitHub and LinkedIn</h2>
          <div className="flex gap-12 mx-auto">
            <a href="https://github.com/sergi-snchz/" target="_blank" rel="noreferrer"><AiOutlineGithub className={"text-3xl transition duration-300 ease-in-out cursor-pointer " + theme.hoverColor} /></a>
            <a href="https://www.linkedin.com/in/sergio-sanchez-b62b8b83/" target="_blank" rel="noreferrer"><FaLinkedin className={"text-3xl transition duration-300 ease-in-out cursor-pointer " + theme.hoverColor} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

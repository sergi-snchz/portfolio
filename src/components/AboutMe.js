import coding from "../img/coding.jpg";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-gray-200 px-5 pt-10">
      <div>
        <div>
          <h2 className="text-center text-lg font-medium mb-5">More About Me</h2>
          <p className="leading-7 text-justify">I build new projects just to tickle my brain. Developing a website or any other software related project includes designing the layout, user interface, defining the site's architecture and much more. Doing such designs is never an easy task but doings things you are not 100% ready is when real growth starts to happen.</p>
          <p className="mt-5 leading-7 text-justify">While I keep myself busy doing software projects. I enjoy playing with computers at the software and hardware level. I also enjoy watching sports in my free time.</p>
        </div>
        <div>
          <h2 className="text-center text-lg font-medium m-5">TOP EXPERTISE</h2>
          <p className="leading-7 text-justify">Fullstack developer with primary focus on React, Node.js with Express.js and MariaDB</p>
          <div className="flex justify-around bg-gray-300 text-sm mt-5 pt-5 pb-5 leading-7">
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
      <div>
        <img src={coding} className="my-10" alt=""/>
        <div className="flex justify-between">
          <h2>Find me on GitHub and LinkedIn</h2>
          <div className="flex">
            <AiOutlineGithub />
            <FaLinkedin />
          </div>
        </div>
      </div>    
    </div>
  );
}
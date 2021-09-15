import Project from "./Project";
import calculator from "../img/calculator-4.png";
import portfolio from "../img/portfolio.png";

export default function Projects({ theme }) {
  return (
    <div className={"mx-5 my-10 max-w-6xl xl:mx-auto " + theme.textColor}>
      <h2 className="text-center text-lg font-medium mb-5">Projects</h2>
      <div className="lg:flex lg:justify-between">
        <Project image={calculator} title="JavaScript Calculator" description="I made a calculator that performs basic arithmetic operations. For this project I used JavaScript with ReactJS and CSS with TailwindCSS." links={{source: "https://github.com/sergi-snchz/calculator", link: "https://sergi-snchz.github.io/calculator/"}} theme={ theme }/>
        <Project image={portfolio} title="Website About Me" description="I made this website about me using JavaScript with ReactJS and CSS with TailwindCSS." links={{source: "https://github.com/sergi-snchz/portfolio", link: "https://sergi-snchz.github.io/portfolio/"}} theme={ theme } />
      </div>
    </div>
  );
}

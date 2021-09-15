import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";

export default function Project({ image, title, description, links, theme }) {
  return (
    <div className="lg:w-2/5">
      <a href={links.link} rel="noreferrer" target="_blank" className={"transition duration-300 ease-in-out cursor-pointer " + theme.hoverColor}><h2 className="font-medium text-center m-5">{title}</h2></a>
      <div className="lg:flex lg:flex-col gap-7">
        <img src={image} alt={title} className="mx-auto h-56 rounded shadow-lg"/>
        <div className="lg:flex lg:flex-col gap-4">
          <p className="m-4 lg:m-0 leading-7 text-justify">{description}</p>
          <span className="flex gap-12 m-4"><a href={links.source} target="_blank" rel="noreferrer"><AiOutlineGithub className={"transition duration-300 ease-in-out cursor-pointer text-3xl " + theme.hoverColor}/></a><a href={links.link} target="_blank" rel="noreferrer"><AiOutlineLink className={"transition duration-300 ease-in-out cursor-pointer text-3xl " + theme.hoverColor}/></a></span>
        </div>
      </div>
    </div>
  );
}

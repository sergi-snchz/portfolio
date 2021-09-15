import img from "../img/sergio.jpg";
import { Link } from "react-scroll";

export default function Main({ theme, setTheme }) {
  function setStorageTheme(theme) {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  }
  return (
    <main>
      <div className={"mx-5 rounded shadow-lg max-w-6xl xl:mx-auto " + theme.decorationBackground}>
        <div className={"flex justify-between items-center rounded-t p-3 border-solid border-b " + theme.borderColor}>
          <div className="flex gap-2">
            <span className="bg-red-500 rounded-full h-5 w-5 flex items-center justify-center shadow-lg"></span>
            <span className="bg-yellow-500 rounded-full h-5 w-5 flex items-center justify-center shadow-lg"></span>
            <span className="bg-green-500 rounded-full h-5 w-5 flex items-center justify-center shadow-lg"></span>
          </div>
          <Link
            className={"font-medium text-lg transition duration-300 ease-in-out cursor-pointer " + theme.hoverColor + " " + theme.textColor}
            to="find-me"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
          >
            Contact
          </Link>
        </div>
        <div className={"flex flex-col p-10 items-center px-12 lg:flex-row lg:justify-around border-solid border-b rounded-b " + theme.windowBackground + " " + theme.borderColor}>
          <div>
            <img src={img} alt="Sergio" className={"border-solid border-2 sm:w-48 rounded shadow-lg " + theme.pictureBorderColor}/>
            <h2 className={"my-5 font-medium text-center " + theme.textColor}>Personalize Theme</h2>
            <div className="flex justify-center gap-5">
              <span className={"rounded-full h-8 w-8 flex items-center justify-center shadow-lg border-solid border-2 transition-all duration-150 ease-in-out hover:border-4 cursor-pointer " + theme.themeColors.darkTheme.background + " " + theme.themeColors.darkTheme.borderColor} onClick={() => setStorageTheme("dark")}></span>
              <span className={"rounded-full h-8 w-8 flex items-center justify-center shadow-lg border-solid border-2 transition-all duration-150 ease-in-out hover:border-4 cursor-pointer " + theme.themeColors.lightTheme.background + " " + theme.themeColors.lightTheme.borderColor} onClick={() => setStorageTheme("light")}></span>
              <span className={"rounded-full h-8 w-8 flex items-center justify-center shadow-lg shadow-lg border-solid border-2 transition-all duration-150 ease-in-out hover:border-4 cursor-pointer " + theme.themeColors.tealTheme.background + " " + theme.themeColors.tealTheme.borderColor} onClick={() => setStorageTheme("teal")}></span>
              <span className={"rounded-full h-8 w-8 flex items-center justify-center shadow-lg shadow-lg border-solid border-2  transition-all duration-150 ease-in-out hover:border-4 cursor-pointer " + theme.themeColors.fuchsiaTheme.background + " " + theme.themeColors.fuchsiaTheme.borderColor} onClick={() => setStorageTheme("fuchsia")}></span>
            </div>
            <small className={"my-5 block text-center " + theme.textColor}>*Theme settings will be saved</small>
          </div>
          <div className="my-5 w-full relative sm:w-64">
            <div className={"w-full h-44 rounded shadow-lg " + theme.innerRectangle}></div>
            <div className={"w-full h-44 mt-5 absolute top-0 left-4 border-solid border border-cyan-500 bg-opacity-80 rounded " + theme.outerRectangle}>
              <h1 className={"text-center font-medium text-xl my-2 " + theme.textColor}>What I Do</h1>
              <p className={"text-sm mx-3 leading-6 " + theme.textColor}>As a developer, my task is to make a web application look great, work fast and perform well.</p>
              <span className="absolute inline-flex rounded-full h-2 w-2 bg-gray-50 -left-1 -top-1 border-solid border border-cyan-500"></span>
              <span className="absolute inline-flex rounded-full h-2 w-2 bg-gray-50 -right-1 -top-1 border-solid border border-cyan-500"></span>
              <span className="absolute inline-flex rounded-full h-2 w-2 bg-gray-50 -right-1 -bottom-1 border-solid border border-cyan-500"></span>
              <span className="absolute inline-flex rounded-full h-2 w-2 bg-gray-50 -left-1 -bottom-1 border-solid border border-cyan-500"></span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

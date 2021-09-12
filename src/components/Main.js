import img from "../img/sergio.jpg";

export default function Main() {
  return (
    <main>
      <div className="bg-gray-300 mx-5 rounded shadow-md max-w-6xl md:mx-auto">
        <div className="flex justify-between items-center rounded-t p-3 border-solid border-b border-gray-400">
          <div className="flex gap-2">
            <span className="bg-red-500 rounded-full h-5 w-5 flex items-center justify-center shadow-md"></span>
            <span className="bg-yellow-500 rounded-full h-5 w-5 flex items-center justify-center shadow-md"></span>
            <span className="bg-green-500 rounded-full h-5 w-5 flex items-center justify-center shadow-md"></span>
          </div>
          <div className="font-medium text-lg">Contact</div>
        </div>
        <div className="flex flex-col p-10 items-center bg-gray-100 px-12 md:flex-row md:justify-around border-solid border-b border-gray-400">
          <div>
            <img src={img} alt="Sergio" className="border-solid border-2 border-gray-400 sm:w-48"/>
            <h2 className="my-5 font-medium text-center">Personalize Theme</h2>
            <div className="flex justify-center gap-5">
              <span className="bg-cool-gray-50 rounded-full h-8 w-8 flex items-center justify-center shadow-md border-solid border-2 border-gray-800 transition-all duration-150 ease-in-out hover:border-4 cursor-pointer"></span>
              <span className="bg-gray-800 rounded-full h-8 w-8 flex items-center justify-center shadow-md border-solid border-2 border-gray-100 transition-all duration-150 ease-in-out hover:border-4 cursor-pointer"></span>
              <span className="bg-teal-700 rounded-full h-8 w-8 flex items-center justify-center shadow-md shadow-md border-solid border-2 border-gray-800 transition-all duration-150 ease-in-out hover:border-4 cursor-pointer"></span>
              <span className="bg-fuchsia-700 rounded-full h-8 w-8 flex items-center justify-center shadow-md shadow-md border-solid border-2 border-gray-800 transition-all duration-150 ease-in-out hover:border-4 cursor-pointer"></span>
            </div>
            <small className="my-5 block text-center">*Theme settings will be saved</small>
          </div>
          <div className="my-5 w-full relative sm:w-64">
            <div className="w-full h-40 bg-gray-300"></div>
            <div className="w-full h-40 bg-gray-50 mt-5 absolute top-0 left-4 border-solid border border-cyan-500 bg-opacity-80">
              <h1 className="text-center font-medium text-xl my-2">What I Do</h1>
              <p className="text-sm mx-3 leading-6">As a developer, my task is to make a web application look great, work fast and perform well.</p>
              <span class="absolute inline-flex rounded-full h-2 w-2 bg-gray-50 -left-1 -top-1 border-solid border border-cyan-500"></span>
              <span class="absolute inline-flex rounded-full h-2 w-2 bg-gray-50 -right-1 -top-1 border-solid border border-cyan-500"></span>
              <span class="absolute inline-flex rounded-full h-2 w-2 bg-gray-50 -right-1 -bottom-1 border-solid border border-cyan-500"></span>
              <span class="absolute inline-flex rounded-full h-2 w-2 bg-gray-50 -left-1 -bottom-1 border-solid border border-cyan-500"></span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
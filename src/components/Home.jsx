import { ArrowDown } from "lucide-react";

const Home = () => {
  return (
    <div
      id="Home"
      className="bg-gray-100 min-h-screen flex items-center justify-center ml-[0px]"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-start">
        <img
          src="/personal.png"
          alt="profile"
          className="rounded-full h-[250px] w-[250px] md:h-[300px] md:w-[300px] object-cover shadow-xl mb-6 md:mb-0"
        />
        <div className="text-center md:text-left md:ml-8 max-w-xl">
          <p className="text-2xl text-gray-700 font-semibold mb-4">
            Hi, I am <span className="text-indigo-600">Anshik Suhane</span>, a
            Full-Stack Web Developer
          </p>
          <p className="text-gray-600 text-lg mb-6">
            Specializing in <span className="text-indigo-600">React.js</span>,{" "}
            <span className="text-indigo-600">Node.js</span>, and more.
            Passionate about building user-friendly, responsive web
            applications.
          </p>
          <div className="flex justify-center gap-6">
            <button
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => document.getElementById("contact").scrollIntoView()}
            >
              Contact me
            </button>

            <a
              href="/assets/resume.pdf"  
              download="Anshik_Suhane_Resume.pdf"
              className="flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Resume <ArrowDown className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useSpring, animated } from "react-spring";
import { User, Code, GraduationCap } from "lucide-react";

const About = () => {
  const headerProps = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800 },
  });
  const sectionProps = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 120, friction: 14 },
  });

  return (
    <div id="about" className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <animated.div style={headerProps} className="text-center mb-12">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text 
            bg-gradient-to-r from-indigo-600 to-purple-600 
            animate-pulse"
          >
            About Me
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto animate-bounce duration-1000">
            Transforming ideas into elegant digital solutions
          </p>
        </animated.div>
        <animated.div
          style={sectionProps}
          className="grid md:grid-cols-2 gap-10"
        >
          <div
            className="bg-white shadow-xl rounded-2xl p-8 
            transition-all duration-500 hover:shadow-2xl hover:scale-105"
          >
            <div className="flex items-center mb-6 animate-slide-in-left">
              <User className="w-12 h-12 text-indigo-600 mr-4 animate-spin-slow" />
              <h2 className="text-3xl font-bold text-gray-800">Who I Am</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed animate-fade-in">
              Hi, I'm a passionate web developer with a strong focus on creating
              dynamic and user-friendly web applications. I have completed my
              10+2 education in Commerce from
              <span className="font-semibold text-indigo-600">
                {" "}
                St. Paul School, Katni (MP)
              </span>
              . My journey into coding is fueled by a love for problem-solving
              and continuous learning.
            </p>
          </div>
          <div
            className="bg-white shadow-xl rounded-2xl p-8 
            transition-all duration-500 hover:shadow-2xl hover:scale-105"
          >
            <div className="flex items-center mb-6 animate-slide-in-right">
              <Code className="w-12 h-12 text-purple-600 mr-4 animate-spin-slow" />
              <h2 className="text-3xl font-bold text-gray-800">My Passion</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed animate-fade-in">
              I specialize in modern tools like
              <span className="font-semibold text-purple-600">
                {" "}
                React.js
              </span>{" "}
              and
              <span className="font-semibold text-purple-600"> Node.js</span> to
              build applications that are scalable and visually engaging. I'm
              constantly exploring innovative ways to deliver solutions that
              make a meaningful impact.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 animate-bounce-in">
              <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm">
                React.js
              </span>
              <span className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm">
                Node.js
              </span>
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                JavaScript
              </span>
            </div>
          </div>
        </animated.div>
        <animated.div
          style={sectionProps}
          className="mt-10 bg-gradient-to-r from-indigo-50 to-indigo-100 
          rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
        >
          <div className="flex items-center mb-6 justify-center animate-pulse-slow">
            <GraduationCap className="w-12 h-12 text-indigo-600 mr-4" />
            <h2 className="text-3xl font-bold text-indigo-800">Education</h2>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto animate-fade-in-delay">
              <p className="text-lg text-gray-700">
                🎓 Completed{" "}
                <span className="font-semibold text-indigo-600">
                  10+2 (Commerce)
                </span>{" "}
                from
                <span className="font-semibold">
                  {" "}
                  St. Paul School, Katni (MP)
                </span>
              </p>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default About;

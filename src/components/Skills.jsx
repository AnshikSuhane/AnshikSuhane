const Skills = () => {
  const skillSet = [
    {
      name: "HTML",
      img: "https://cdn-icons-png.flaticon.com/256/174/174854.png",
      borderColor: "rgb(255, 87, 34)",
    },
    {
      name: "CSS",
      img: "https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png",
      borderColor: "rgb(33, 150, 243)",
    },
    {
      name: "JavaScript",
      img: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
      borderColor: "rgb(255, 193, 7)",
    },
    {
      name: "React JS",
      img: "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp&w=256",
      borderColor: "rgb(76, 175, 80)",
    },
    {
      name: "Redux",
      img: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      borderColor: "rgb(244, 67, 54)",
    },
    {
      name: "Tailwind CSS",
      img: "https://cdn.iconscout.com/icon/free/png-256/free-tailwindcss-3521829-2945278.png",
      borderColor: "rgb(56, 189, 248)",
    },
    {
      name: "Chakra UI",
      img: "https://img.icons8.com/?size=512&id=r9QJ0VFFrn7T&format=png",
      borderColor: "rgb(103, 58, 183)",
    },
    {
      name: "Mongo DB",
      img: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3629020-3030245.png",
      borderColor: "rgb(76, 175, 80)",
    },
    {
      name: "TypeScript",
      img: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
      borderColor: "rgb(0, 122, 204)",
    },
    {
      name: "Python",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      borderColor: "rgb(75, 192, 192)",
    },
  ];

  const tools = [
    {
      name: "VS Code",
      img: "https://code.visualstudio.com/assets/images/code-stable.png ",
      borderColor: "rgb(63, 81, 181)",
    },
    {
      name: "GitHub",
      img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      borderColor: "rgb(33, 150, 243)",
    },
    {
      name: "Netlify",
      img: "https://cdn.iconscout.com/icon/free/png-256/free-netlify-3628945-3029193.png",
      borderColor: "rgb(0, 200, 83)",
    },
    {
      name: "Postman",
      img: "https://cdn.iconscout.com/icon/free/png-256/free-postman-3521648-2945092.png",
      borderColor: "rgb(255, 87, 34)",
    },
    {
      name: "Firebase",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
      borderColor: "rgb(255, 193, 7)",
    },
    {
      name: "MySQL",
      img: "https://cdn.iconscout.com/icon/free/png-256/free-mysql-3521596-2945040.png",
      borderColor: "rgb(0, 121, 191)",
    },
    {
      name: "Slack",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968871.png",
      borderColor: "rgb(74, 20, 140)",
    },
    {
      name: "Mongo DB",
      img: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3629020-3030245.png",
      borderColor: "rgb(76, 175, 80)",
    },
    {
      name: "Material UI",
      img: "https://tse1.mm.bing.net/th?id=OIP.aCK3HUSs4N8YGw_9x7vWQAAAAA&pid=Api&P=0&h=220",
      borderColor: "rgb(63, 81, 181)",
    },
    {
      name: "Shadcn UI",
      img: "https://raw.githubusercontent.com/radix-vue/shadcn-vue/dev/apps/www/src/public/android-chrome-192x192.png",
      // h",
      borderColor: "rgb(63, 81, 181)",
    },
  ];

  return (
    <div id="Skills" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-16 px-4">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-white">Professional Skillset</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
        {skillSet.map((item) => (
          <div
            key={item.name}
            className="skill-item p-6 bg-white rounded-xl shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl duration-300"
            style={{ borderLeft: `6px solid ${item.borderColor}` }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 object-contain mb-4 mx-auto"
              loading="lazy"
            />
            <p className="text-center text-lg font-medium text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>

      <h2 className="text-4xl font-extrabold text-center text-white mb-8">Tools I Use</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {tools.map((item) => (
          <div
            key={item.name}
            className="skill-item p-6 bg-white rounded-xl shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl duration-300"
            style={{ borderLeft: `6px solid ${item.borderColor}` }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 object-contain mb-4 mx-auto"
              loading="lazy"
            />
            <p className="text-center text-lg font-medium text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

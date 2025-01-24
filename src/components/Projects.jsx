import ProjectCard from "./ProjectCard";

const projects = [

  {
    title: "Fruit Store",
    main: "E-commerce platform for selling fruits with modern design and smooth user experience.",
    demoLink: "https://superb-hotteok-42e7e6.netlify.app/",
    sourceCodeLink: "https://github.com/AnshikSuhane/FruitStore.git",
    bannerImg: "/FruitStore.png",
  },
  {
    title: "EatLog App",
    main: "React-based nutrition tracking app to calculate daily caloric needs and manage diet.",
    demoLink: "https://eatlog.netlify.app/",
    sourceCodeLink: "https://github.com/AnshikSuhane/6308-hackerthon",
    bannerImg: "/Eatlog.png",
  },
];

const Projects = () => {
  return (
    <section 
      id="Projects" 
      className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-12 tracking-tight">
          My Creative Projects
        </h2>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              main={project.main}
              demoLink={project.demoLink}
              sourceCodeLink={project.sourceCodeLink}
              bannerImg={project.bannerImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
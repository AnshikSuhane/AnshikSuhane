import PropTypes from 'prop-types';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, main, demoLink, sourceCodeLink, bannerImg }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white">
      <div className="relative h-48 sm:h-60 md:h-72 lg:h-80 overflow-hidden">
        <img 
          src={bannerImg} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity"></div>
      </div>

      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4">{main}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            aria-label={`View live demo of ${title}`}
          >
            <ExternalLink className="mr-2" size={18} /> 
            Live Demo
          </a>
          <a 
            href={sourceCodeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
            aria-label={`View source code for ${title}`}
          >
            <Github className="mr-2" size={18} /> 
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  sourceCodeLink: PropTypes.string.isRequired,
  bannerImg: PropTypes.string.isRequired,
};
export default ProjectCard
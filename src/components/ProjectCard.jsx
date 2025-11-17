import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    planning: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <Link
      to={`/projects/${project.id}`}
      className="block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
    >
      <div className="relative h-56 sm:h-64 bg-gradient-to-br from-emerald-400 to-teal-500">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-5xl font-bold">
            {project.name.charAt(0)}
          </div>
        )}
        <div className="absolute top-5 right-5">
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              statusColors[project.status] || statusColors.planning
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>
      <div className="p-8 sm:p-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{project.name}</h3>
        <p className="text-base sm:text-lg text-gray-600 mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
        <div className="flex items-center text-base text-gray-500">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>{project.location}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;



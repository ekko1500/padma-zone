import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.status === filter);

  const statusCounts = {
    all: projects.length,
    active: projects.filter(p => p.status === 'active').length,
    completed: projects.filter(p => p.status === 'completed').length,
    planning: projects.filter(p => p.status === 'planning').length,
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8">Our Projects</h1>
          <p className="text-xl sm:text-2xl text-emerald-100 max-w-4xl leading-relaxed">
            Explore the diverse range of social impact initiatives supported by Padma.
            Each project represents a commitment to creating positive change in our communities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'active', label: 'Active' },
            { key: 'completed', label: 'Completed' },
            { key: 'planning', label: 'Planning' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-8 py-3 rounded-xl font-semibold text-base transition-all ${
                filter === key
                  ? 'bg-emerald-700 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {label} ({statusCounts[key]})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-20">
            <p className="text-gray-500 text-xl sm:text-2xl">No projects found in this category.</p>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-20 sm:mt-24 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-12 sm:p-16 lg:p-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 sm:mb-16 text-center">Project Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-700 mb-2">
                {projects.length}
              </div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {statusCounts.active}
              </div>
              <div className="text-gray-600">Active Now</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {statusCounts.completed}
              </div>
              <div className="text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">
                {statusCounts.planning}
              </div>
              <div className="text-gray-600">In Planning</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;


import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProjectById } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
        <Link
          to="/projects"
          className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-800 transition-colors"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  const statusColors = {
    active: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    planning: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <button
            onClick={() => navigate(-1)}
            className="text-emerald-100 hover:text-white mb-4 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </button>
          <div className="flex items-center gap-4 mb-4">
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                statusColors[project.status] || statusColors.planning
              }`}
            >
              {project.status}
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8">{project.name}</h1>
          <p className="text-xl sm:text-2xl text-emerald-100 max-w-4xl leading-relaxed">{project.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10 sm:space-y-12">
            {/* Project Image */}
            {project.image ? (
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={project.image} alt={project.name} className="w-full h-96 object-cover" />
              </div>
            ) : (
              <div className="rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 h-96 flex items-center justify-center text-white text-6xl font-bold shadow-lg">
                {project.name.charAt(0)}
              </div>
            )}

            {/* Goals */}
            <section className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Goals</h2>
              <ul className="space-y-3">
                {project.goals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-emerald-700 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">{goal}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Outcomes */}
            {project.outcomes && project.outcomes.length > 0 && (
              <section className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Achieved Outcomes</h2>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Timeline */}
            <section className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Timeline & Milestones</h2>
              <div className="space-y-4">
                {project.timeline.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-emerald-700 font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-emerald-700 font-semibold mb-1">
                        {new Date(item.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="text-gray-900 font-medium">{item.milestone}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Information</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Location</div>
                  <div className="flex items-center text-gray-900">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    {project.location}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Status</div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      statusColors[project.status] || statusColors.planning
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Team Members</h3>
              <div className="space-y-4">
                {project.team.map((member, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-700 font-semibold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-500">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;


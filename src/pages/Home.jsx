import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Home = () => {
  const featuredProjects = projects.slice(0, 3);
  const latestEvents = [
    { title: 'Padma Annual Summit 2024', date: 'September 15, 2024' },
    { title: 'Community Impact Workshop', date: 'August 20, 2024' },
    { title: 'Project Showcase Night', date: 'July 25, 2024' }
  ];

  return (
    <div>
      <Hero
        title="Welcome to Padma"
        subtitle="Empowering young leaders to create lasting social impact in their communities"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32">
        {/* Introduction Section */}
        <section className="text-center mb-24 sm:mb-32">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
            About Padma
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Padma is a community-focused program that supports young leaders and project teams
            working on social impact initiatives. We provide resources, mentorship, and a platform
            for changemakers to turn their ideas into reality.
          </p>
        </section>

        {/* Featured Projects */}
        <section className="mb-24 sm:mb-32">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 sm:mb-16 gap-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Featured Projects</h2>
            <Link
              to="/projects"
              className="text-emerald-700 hover:text-emerald-800 font-semibold text-lg"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Latest Updates */}
        <section className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-10 sm:p-16 lg:p-20 mb-24 sm:mb-32">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 sm:mb-16 text-center">
            Latest Updates & Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {latestEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 sm:p-10 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-base text-emerald-700 font-semibold mb-4">
                  {event.date}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                <Link
                  to="/events"
                  className="text-emerald-700 hover:text-emerald-800 text-base font-medium inline-flex items-center gap-2"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 sm:mt-16">
            <Link
              to="/events"
              className="inline-block bg-emerald-700 text-white px-10 py-4 rounded-xl font-semibold hover:bg-emerald-800 transition-colors text-lg"
            >
              View All Events
            </Link>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="bg-white rounded-3xl shadow-lg p-12 sm:p-16 lg:p-20 mb-24 sm:mb-32">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 sm:mb-16 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-emerald-700 mb-4">12+</div>
              <div className="text-lg sm:text-xl text-gray-600">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-emerald-700 mb-4">200+</div>
              <div className="text-lg sm:text-xl text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-emerald-700 mb-4">5K+</div>
              <div className="text-lg sm:text-xl text-gray-600">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-emerald-700 mb-4">15+</div>
              <div className="text-lg sm:text-xl text-gray-600">Community Partners</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gray-900 text-white rounded-3xl p-12 sm:p-16 lg:p-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Join Padma and be part of a community of changemakers working to create positive impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-emerald-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors text-lg"
            >
              Get in Touch
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors text-lg"
            >
              Learn More
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;


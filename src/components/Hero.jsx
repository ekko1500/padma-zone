import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, showButtons = true }) => {
  return (
    <div className="relative bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 lg:py-48">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-10 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl sm:text-2xl lg:text-3xl mb-10 sm:mb-12 text-emerald-100 max-w-4xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/about"
                className="bg-white text-emerald-700 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              >
                Learn More
              </Link>
              <Link
                to="/projects"
                className="bg-emerald-800 text-white px-10 py-4 rounded-xl font-semibold hover:bg-emerald-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-white text-lg"
              >
                Explore Projects
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;



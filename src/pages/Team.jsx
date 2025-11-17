import { teamMembers } from '../data/team';

const Team = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8">Our Team</h1>
          <p className="text-xl sm:text-2xl text-emerald-100 max-w-4xl leading-relaxed">
            Meet the dedicated individuals who make Padma's mission possible. Our team brings
            together diverse expertise and a shared passion for community impact.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-20 sm:mb-24">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    member.name.charAt(0)
                  )}
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-emerald-700 font-semibold mb-4">{member.role}</div>

                {/* Bio */}
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                {/* Contact */}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-emerald-700 hover:text-emerald-800 text-sm font-medium flex items-center"
                  >
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Contact
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-12 sm:p-16 lg:p-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">Join Our Team</h2>
          <p className="text-xl sm:text-2xl text-gray-700 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Are you passionate about social impact and community development? We're always looking
            for dedicated individuals to join our mission.
          </p>
          <a
            href="/contact"
            className="inline-block bg-emerald-700 text-white px-10 py-4 rounded-xl font-semibold hover:bg-emerald-800 transition-colors text-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;


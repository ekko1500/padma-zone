import Hero from '../components/Hero';

const About = () => {
  return (
    <div>
      <Hero
        title="About Padma"
        subtitle="Empowering communities through youth leadership and social innovation"
        showButtons={false}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32">
        {/* Mission & Vision */}
        <section className="mb-24 sm:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
            <div className="bg-emerald-50 rounded-3xl p-10 sm:p-12 lg:p-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
                To empower young leaders and project teams with the resources, mentorship, and
                platform they need to create meaningful social impact in their communities. We
                believe that every young person has the potential to be a changemaker.
              </p>
            </div>
            <div className="bg-teal-50 rounded-3xl p-10 sm:p-12 lg:p-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
                A world where young leaders are equipped and supported to address social challenges,
                build stronger communities, and create sustainable positive change that benefits
                generations to come.
              </p>
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="mb-24 sm:mb-32">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 sm:mb-16 text-center">Our Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Support Leaders</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Provide mentorship, training, and resources to help young leaders develop their skills and confidence.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Enable Projects</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Help project teams turn their ideas into reality through funding, guidance, and community connections.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Build Community</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Foster connections between changemakers, mentors, partners, and community members.
              </p>
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Background</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 mb-4">
              Padma was founded in 2020 with a simple yet powerful vision: to create a platform
              where young leaders could access the support they need to make a real difference in
              their communities.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Since our inception, we've supported dozens of projects across various sectors including
              education, environmental sustainability, healthcare access, and community development.
              Our programs have directly impacted thousands of lives and continue to grow.
            </p>
            <p className="text-lg text-gray-700">
              We believe that sustainable change comes from within communities, and our role is to
              empower local leaders with the tools and resources they need to succeed.
            </p>
          </div>
        </section>

        {/* Partners */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Community Foundation', 'Youth Network', 'Social Impact Fund', 'Local Government'].map((partner, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl p-6 text-center hover:bg-gray-200 transition-colors"
              >
                <div className="text-2xl font-bold text-gray-400 mb-2">
                  {partner.split(' ').map(word => word[0]).join('')}
                </div>
                <div className="text-sm text-gray-600">{partner}</div>
              </div>
            ))}
          </div>
        </section>

        {/* What We Hope to Achieve */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            What We Hope to Achieve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Short-term Goals</h3>
              <ul className="space-y-2 text-emerald-100">
                <li>• Expand our project portfolio to 20+ active initiatives</li>
                <li>• Establish mentorship programs in 5 new communities</li>
                <li>• Host quarterly networking and learning events</li>
                <li>• Build partnerships with 10+ new organizations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Long-term Vision</h3>
              <ul className="space-y-2 text-emerald-100">
                <li>• Create a self-sustaining network of changemakers</li>
                <li>• Scale successful projects to reach more communities</li>
                <li>• Establish Padma as a model for youth-led social impact</li>
                <li>• Impact 50,000+ lives through our programs</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;


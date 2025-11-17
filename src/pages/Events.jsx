import { events } from '../data/events';

const Events = () => {
  const upcomingEvents = events.filter(e => e.status === 'upcoming');
  const pastEvents = events.filter(e => e.status === 'completed');

  const getEventTypeColor = (type) => {
    const colors = {
      conference: 'bg-purple-100 text-purple-800',
      workshop: 'bg-blue-100 text-blue-800',
      showcase: 'bg-pink-100 text-pink-800',
      training: 'bg-green-100 text-green-800',
      networking: 'bg-yellow-100 text-yellow-800',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8">Events & Updates</h1>
          <p className="text-xl sm:text-2xl text-emerald-100 max-w-4xl leading-relaxed">
            Stay connected with Padma through our events, workshops, and community gatherings.
            Join us to learn, network, and celebrate our collective impact.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <section className="mb-20 sm:mb-24">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 sm:mb-16">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getEventTypeColor(
                        event.type
                      )}`}
                    >
                      {event.type}
                    </span>
                    <span className="text-sm text-emerald-700 font-semibold">
                      {formatDate(event.date)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center">
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
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <section>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 sm:mb-16">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-gray-50 rounded-2xl shadow-md p-6 opacity-75"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getEventTypeColor(
                        event.type
                      )}`}
                    >
                      {event.type}
                    </span>
                    <span className="text-sm text-gray-600 font-semibold">
                      {formatDate(event.date)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                  <div className="text-sm text-gray-500">
                    <div className="flex items-center mb-1">
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
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Subscribe Section */}
        <div className="mt-20 sm:mt-24 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-12 sm:p-16 lg:p-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8">Stay Updated</h2>
          <p className="text-xl sm:text-2xl text-emerald-100 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Never miss an event or important update. Subscribe to our newsletter to stay informed
            about upcoming events, project milestones, and community news.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <button className="bg-white text-emerald-700 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;


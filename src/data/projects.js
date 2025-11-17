export const projects = [
  {
    id: 1,
    name: 'Community Garden Initiative',
    description: 'A sustainable urban farming project that provides fresh produce to local communities while teaching gardening skills to youth.',
    location: 'Downtown District',
    status: 'active',
    image: null,
    goals: [
      'Establish 5 community gardens across the city',
      'Train 50+ youth in sustainable farming practices',
      'Provide fresh produce to 200+ families monthly'
    ],
    outcomes: [
      '3 gardens successfully established',
      '35 youth trained in first phase',
      '150 families receiving monthly produce'
    ],
    team: [
      { name: 'Sarah Johnson', role: 'Project Lead' },
      { name: 'Michael Chen', role: 'Garden Coordinator' },
      { name: 'Emma Rodriguez', role: 'Community Outreach' }
    ],
    timeline: [
      { date: '2024-01-15', milestone: 'Project Launch' },
      { date: '2024-03-20', milestone: 'First Garden Established' },
      { date: '2024-06-10', milestone: 'Training Program Started' }
    ]
  },
  {
    id: 2,
    name: 'Digital Literacy Program',
    description: 'Empowering underserved communities with essential digital skills through free workshops and one-on-one mentoring.',
    location: 'Eastside Community Center',
    status: 'active',
    image: null,
    goals: [
      'Train 100+ adults in basic computer skills',
      'Provide free access to computers and internet',
      'Help participants find employment opportunities'
    ],
    outcomes: [
      '75 participants completed basic training',
      '20 participants found new employment',
      'Community computer lab established'
    ],
    team: [
      { name: 'David Kim', role: 'Program Director' },
      { name: 'Lisa Wang', role: 'Lead Instructor' },
      { name: 'James Martinez', role: 'Tech Support' }
    ],
    timeline: [
      { date: '2024-02-01', milestone: 'Program Launch' },
      { date: '2024-04-15', milestone: 'First Cohort Graduated' },
      { date: '2024-07-01', milestone: 'Computer Lab Opened' }
    ]
  },
  {
    id: 3,
    name: 'Youth Mentorship Network',
    description: 'Connecting young people with experienced mentors to guide their personal and professional development.',
    location: 'Citywide',
    status: 'active',
    image: null,
    goals: [
      'Match 80+ youth with mentors',
      'Organize monthly networking events',
      'Create career development resources'
    ],
    outcomes: [
      '65 successful mentor-mentee matches',
      '12 monthly events hosted',
      'Career resource library created'
    ],
    team: [
      { name: 'Amanda Taylor', role: 'Network Coordinator' },
      { name: 'Robert Brown', role: 'Mentor Recruitment' },
      { name: 'Jessica Lee', role: 'Event Organizer' }
    ],
    timeline: [
      { date: '2023-11-10', milestone: 'Network Launch' },
      { date: '2024-01-20', milestone: 'First 30 Matches' },
      { date: '2024-05-05', milestone: '50+ Matches Achieved' }
    ]
  },
  {
    id: 4,
    name: 'Clean Water Access Project',
    description: 'Installing water filtration systems in rural communities to ensure access to clean, safe drinking water.',
    location: 'Rural Villages',
    status: 'completed',
    image: null,
    goals: [
      'Install 10 water filtration systems',
      'Train local communities on maintenance',
      'Improve health outcomes for 500+ people'
    ],
    outcomes: [
      '12 systems successfully installed',
      '30 community members trained',
      '600+ people now have clean water access'
    ],
    team: [
      { name: 'Maria Garcia', role: 'Project Manager' },
      { name: 'Thomas Anderson', role: 'Technical Lead' },
      { name: 'Sophie White', role: 'Community Liaison' }
    ],
    timeline: [
      { date: '2023-08-01', milestone: 'Project Start' },
      { date: '2023-10-15', milestone: 'First System Installed' },
      { date: '2024-02-28', milestone: 'Project Completion' }
    ]
  },
  {
    id: 5,
    name: 'Elderly Care Support',
    description: 'Providing companionship, assistance, and resources to elderly community members living alone.',
    location: 'Westside Neighborhood',
    status: 'active',
    image: null,
    goals: [
      'Support 60+ elderly residents',
      'Organize weekly social activities',
      'Provide transportation assistance'
    ],
    outcomes: [
      '45 residents receiving regular support',
      'Weekly activities running smoothly',
      'Transportation network established'
    ],
    team: [
      { name: 'Patricia Moore', role: 'Program Coordinator' },
      { name: 'Kevin Zhang', role: 'Volunteer Manager' },
      { name: 'Rachel Green', role: 'Activity Director' }
    ],
    timeline: [
      { date: '2024-03-01', milestone: 'Program Launch' },
      { date: '2024-04-10', milestone: 'First Activities Started' },
      { date: '2024-06-20', milestone: '40+ Residents Enrolled' }
    ]
  },
  {
    id: 6,
    name: 'Art & Culture Festival',
    description: 'An annual celebration of local arts and culture, showcasing the talents of community artists and performers.',
    location: 'Central Park',
    status: 'planning',
    image: null,
    goals: [
      'Feature 50+ local artists',
      'Attract 1000+ attendees',
      'Raise funds for community programs'
    ],
    outcomes: [],
    team: [
      { name: 'Alex Rivera', role: 'Festival Director' },
      { name: 'Maya Patel', role: 'Artist Coordinator' },
      { name: 'Daniel Kim', role: 'Logistics Manager' }
    ],
    timeline: [
      { date: '2024-09-01', milestone: 'Planning Phase' },
      { date: '2024-10-15', milestone: 'Artist Applications Open' },
      { date: '2024-12-01', milestone: 'Festival Date' }
    ]
  }
];

export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};


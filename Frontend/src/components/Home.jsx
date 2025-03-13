import { Link } from 'react-router-dom';
import { 
  RocketLaunchIcon,
  TicketIcon, 
  MagnifyingGlassIcon,
  ClockIcon, 
  UserGroupIcon,
  ChartBarIcon,
  PhoneIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const features = [
    {
      name: 'Live Train Status',
      icon: RocketLaunchIcon,
      path: '/live-status',
      description: 'Track your train\'s current location in real-time with precise GPS tracking'
    },
    {
      name: 'PNR Status',
      icon: TicketIcon,
      path: '/pnr-status',
      description: 'Instantly check your PNR status and get booking details'
    },
    {
      name: 'Train Search',
      icon: MagnifyingGlassIcon,
      path: '/train-search',
      description: 'Find trains between stations with smart filtering options'
    },
    {
      name: 'Train Schedule',
      icon: ClockIcon,
      path: '/train-schedule',
      description: 'View complete train schedules with all stops and timings'
    },
    {
      name: 'Seat Availability',
      icon: UserGroupIcon,
      path: '/seat-availability',
      description: 'Check real-time seat availability across all classes'
    },
    {
      name: 'Train Analytics',
      icon: ChartBarIcon,
      path: '/analytics',
      description: 'Get insights on train punctuality and performance'
    }
  ];

  const stats = [
    { label: 'Indian Railways Network', value: '7,325 Stations' },
    { label: 'Daily Trains', value: '13,500+' },
    { label: 'Daily Passengers', value: '23M+' },
    { label: 'Route Coverage', value: '67,956 KM' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-primary-900">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="text-white">Track Your Train with </span>
            <span className="text-accent-400">Precision</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time train tracking, PNR status, and seat availability - all in one place. 
            Your complete Indian Railways companion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/live-status"
              className="px-8 py-3 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
            >
              Track Now
            </Link>
            <Link
              to="/train-search"
              className="px-8 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              Search Trains
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-accent-400">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Everything You Need
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.name}
                to={feature.path}
                className="group p-6 bg-primary-800/50 rounded-xl hover:bg-primary-700/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4">
                  <feature.icon className="h-8 w-8 text-accent-400 group-hover:text-accent-500 transition-colors" />
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-accent-400 transition-colors">
                      {feature.name}
                    </h3>
                    <p className="text-gray-400 mt-2">{feature.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-primary-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Choose TrainTracker?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <ShieldCheckIcon className="h-12 w-12 text-accent-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Reliable Data</h3>
              <p className="text-gray-400">Real-time updates directly from Indian Railways</p>
            </div>
            <div className="text-center p-6">
              <ChartBarIcon className="h-12 w-12 text-accent-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Smart Analytics</h3>
              <p className="text-gray-400">Detailed insights and predictions for better planning</p>
            </div>
            <div className="text-center p-6">
              <PhoneIcon className="h-12 w-12 text-accent-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-400">Always here to help with your queries</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Tracking?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get real-time updates and plan your journey better with TrainTracker
          </p>
          <Link
            to="/live-status"
            className="inline-flex items-center px-8 py-3 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
          >
            <RocketLaunchIcon className="h-5 w-5 mr-2" />
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
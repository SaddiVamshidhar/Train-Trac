import { useState } from 'react';
import { UsersIcon as UserGroupIcon } from '@heroicons/react/24/outline';

export default function SeatAvailability() {
  const [trainNumber, setTrainNumber] = useState('');
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [date, setDate] = useState('');
  const [quota, setQuota] = useState('GN');

  const quotaOptions = [
    { value: 'GN', label: 'General' },
    { value: 'TQ', label: 'Tatkal' },
    { value: 'LD', label: 'Ladies' },
    { value: 'DF', label: 'Defence' },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-accent-500">Check Seat Availability</h1>
      
      <div className="bg-primary-800 p-6 rounded-lg">
        <div className="space-y-4">
          <div>
            <label htmlFor="trainNumber" className="block text-sm font-medium text-gray-400">
              Train Number
            </label>
            <input
              type="text"
              id="trainNumber"
              value={trainNumber}
              onChange={(e) => setTrainNumber(e.target.value)}
              className="mt-1 block w-full rounded-md bg-primary-700 border-gray-600 text-gray-100 focus:border-accent-500 focus:ring focus:ring-accent-500 focus:ring-opacity-50"
              placeholder="Enter train number"
            />
          </div>

          <div>
            <label htmlFor="fromStation" className="block text-sm font-medium text-gray-400">
              From Station
            </label>
            <input
              type="text"
              id="fromStation"
              value={fromStation}
              onChange={(e) => setFromStation(e.target.value)}
              className="mt-1 block w-full rounded-md bg-primary-700 border-gray-600 text-gray-100 focus:border-accent-500 focus:ring focus:ring-accent-500 focus:ring-opacity-50"
              placeholder="Enter source station"
            />
          </div>

          <div>
            <label htmlFor="toStation" className="block text-sm font-medium text-gray-400">
              To Station
            </label>
            <input
              type="text"
              id="toStation"
              value={toStation}
              onChange={(e) => setToStation(e.target.value)}
              className="mt-1 block w-full rounded-md bg-primary-700 border-gray-600 text-gray-100 focus:border-accent-500 focus:ring focus:ring-accent-500 focus:ring-opacity-50"
              placeholder="Enter destination station"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-400">
              Date of Journey
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full rounded-md bg-primary-700 border-gray-600 text-gray-100 focus:border-accent-500 focus:ring focus:ring-accent-500 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="quota" className="block text-sm font-medium text-gray-400">
              Quota
            </label>
            <select
              id="quota"
              value={quota}
              onChange={(e) => setQuota(e.target.value)}
              className="mt-1 block w-full rounded-md bg-primary-700 border-gray-600 text-gray-100 focus:border-accent-500 focus:ring focus:ring-accent-500 focus:ring-opacity-50"
            >
              {quotaOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          <button
            className="w-full bg-accent-500 text-white py-2 px-4 rounded-md hover:bg-accent-600 transition-colors flex items-center justify-center space-x-2"
          >
            <UserGroupIcon className="h-5 w-5" />
            <span>Check Availability</span>
          </button>
        </div>

        <div className="mt-8 text-gray-400 text-center">
          Enter details to check seat availability
        </div>
      </div>
    </div>
  );
}
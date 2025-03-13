import { useState } from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';

export default function TrainSchedule() {
  const [trainNumber, setTrainNumber] = useState('');

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-accent-500">Train Schedule</h1>
      
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
          
          <button
            className="w-full bg-accent-500 text-white py-2 px-4 rounded-md hover:bg-accent-600 transition-colors flex items-center justify-center space-x-2"
          >
            <ClockIcon className="h-5 w-5" />
            <span>Get Schedule</span>
          </button>
        </div>

        <div className="mt-8 text-gray-400 text-center">
          Enter train number to view its complete schedule
        </div>
      </div>
    </div>
  );
}
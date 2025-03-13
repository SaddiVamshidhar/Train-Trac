import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import PageHeader from './shared/PageHeader';
import Card from './shared/Card';
import Input from './shared/Input';
import Button from './shared/Button';

export default function TrainSearch() {
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <PageHeader 
        title="Search Trains"
        description="Find trains between stations with smart filtering options"
      />
      
      <Card>
        <div className="space-y-6">
          <Input
            label="From Station"
            id="fromStation"
            value={fromStation}
            onChange={(e) => setFromStation(e.target.value)}
            placeholder="Enter source station"
          />

          <Input
            label="To Station"
            id="toStation"
            value={toStation}
            onChange={(e) => setToStation(e.target.value)}
            placeholder="Enter destination station"
          />

          <Input
            type="date"
            label="Date of Journey"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          
          <Button
            onClick={handleSearch}
            disabled={loading || !fromStation || !toStation || !date}
            icon={MagnifyingGlassIcon}
            className="w-full"
          >
            {loading ? 'Searching...' : 'Search Trains'}
          </Button>
        </div>

        <div className="mt-8 text-center">
          <MagnifyingGlassIcon className="h-12 w-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">
            Enter stations and date to find available trains
          </p>
        </div>
      </Card>
    </div>
  );
}
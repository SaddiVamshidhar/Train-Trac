import { useState } from 'react';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import PageHeader from './shared/PageHeader';
import Card from './shared/Card';
import Input from './shared/Input';
import Button from './shared/Button';
import { getLiveStatus } from '../services/api';

const stripHtmlTags = (str) => {
  if (!str) return str;
  return str.replace(/<\/?[^>]+(>|$)/g, ''); // Removes all HTML tags
};

export default function LiveStatus() {
  const [trainNumber, setTrainNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [trainData, setTrainData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (trainNumber.length !== 5) {
      toast.error('Please enter a valid 5-digit train number');
      setError('Please enter a valid 5-digit train number');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const result = await getLiveStatus(trainNumber);

      if (result.success && result.data) {
        const { body } = result.data;
        const stations = parseStations(body.stations);
        setTrainData({
          trainName: body.train_name || `Train ${trainNumber}`,
          trainNumber,
          progress: calculateProgress(stations),
          currentStation: body.current_station || 'Information Unavailable',
          lastUpdated:
            body.time_of_availability || new Date().toLocaleTimeString(),
          message: body.train_status_message || 'In Transit',
          stations,
        });
        toast.success('Train status updated successfully!');
      } else {
        throw new Error(result.error || 'Failed to fetch train status');
      }
    } catch (err) {
      console.error('Error fetching train status:', err);
      toast.error(err.message || 'Failed to fetch train status');
      setError('Unable to fetch train status. Please try again later.');
      setTrainData(null);
    } finally {
      setLoading(false);
    }
  };

  const calculateProgress = (stations) => {
    const passedStations = stations.filter((station) => station.passed).length;
    return Math.min(Math.round((passedStations / stations.length) * 100), 100);
  };

  const parseStations = (stationList) =>
    stationList.map((station) => ({
      name: station.stationName,
      code: station.stationCode,
      arrival: station.arrivalTime,
      departure: station.departureTime,
      platform: station.expected_platform,
      halt: station.haltTime > 0 ? `${station.haltTime} mins` : 'No halt',
      delay: calculateDelay(station.actual_arrival_time, station.arrivalTime),
      passed: !!station.actual_departure_time,
      current: station.stationCode === trainData?.currentStation,
    }));

  const calculateDelay = (actualTime, scheduledTime) => {
    const [actualHours, actualMinutes] = actualTime.split(':').map(Number);
    const [scheduledHours, scheduledMinutes] = scheduledTime
      .split(':')
      .map(Number);
    const actualMinutesTotal = actualHours * 60 + actualMinutes;
    const scheduledMinutesTotal = scheduledHours * 60 + scheduledMinutes;

    return actualMinutesTotal > scheduledMinutesTotal
      ? `${actualMinutesTotal - scheduledMinutesTotal} mins delayed`
      : 'On Time';
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 px-4">
      <PageHeader
        title="Live Train Status"
        description="Track your train's real-time location and get instant updates"
      />

      <Card>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              label="Train Number"
              id="trainNumber"
              value={trainNumber}
              onChange={(e) =>
                setTrainNumber(e.target.value.replace(/\D/g, '').slice(0, 5))
              }
              placeholder="Enter 5-digit train number"
              maxLength="5"
              error={error}
            />
          </div>
          <div className="flex items-end">
            <Button
              onClick={handleSearch}
              disabled={loading || trainNumber.length !== 5}
              icon={RocketLaunchIcon}
              className={`w-full md:w-auto ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Tracking...' : 'Track Now'}
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="mt-8 space-y-6">
            <Skeleton
              height={100}
              baseColor="#1f2937"
              highlightColor="#374151"
            />
          </div>
        ) : trainData ? (
          <div className="mt-8 space-y-6">
            <Card className="bg-gradient-to-r from-primary-800 to-primary-700">
              <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold">{trainData.trainName}</h2>
                <p className="text-gray-400">Train #{trainData.trainNumber}</p>
                <p className="mt-2">{stripHtmlTags(trainData.message)}</p>
                <p className="text-sm text-gray-400">
                  Last Updated: {trainData.lastUpdated}
                </p>
              </div>
            </Card>

            <div className="space-y-4">
              {trainData.stations.map((station, index) => (
                <Card
                  key={index}
                  className={`p-4 ${
                    station.current ? 'bg-accent-600' : 'bg-gray-800'
                  }`}
                >
                  <h3 className="text-lg font-bold text-white">
                    {station.name}
                  </h3>
                  <p className="text-gray-300">Code: {station.code}</p>
                  <p className="text-gray-300">Platform: {station.platform}</p>
                  <p className="text-gray-300">Arrival: {station.arrival}</p>
                  <p className="text-gray-300">
                    Departure: {station.departure}
                  </p>
                  <p className="text-gray-300">Halt Time: {station.halt}</p>
                  <p className="text-gray-300">Delay: {station.delay}</p>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-8 text-center">
            <p>Enter a train number to see its current location and status</p>
          </div>
        )}
      </Card>
    </div>
  );
}

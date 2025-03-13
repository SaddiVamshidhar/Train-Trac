import { useState } from 'react';
import { TicketIcon } from '@heroicons/react/24/outline';
import PageHeader from './shared/PageHeader';
import Card from './shared/Card';
import Input from './shared/Input';
import Button from './shared/Button';

export default function PNRStatus() {
  const [pnrNumber, setPnrNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <PageHeader 
        title="PNR Status"
        description="Check your PNR status and get detailed booking information"
      />
      
      <Card>
        <div className="space-y-6">
          <Input
            label="PNR Number"
            id="pnrNumber"
            value={pnrNumber}
            onChange={(e) => setPnrNumber(e.target.value)}
            placeholder="Enter 10-digit PNR number"
            maxLength="10"
          />
          
          <Button
            onClick={handleCheck}
            disabled={loading || pnrNumber.length !== 10}
            icon={TicketIcon}
            className="w-full"
          >
            {loading ? 'Checking...' : 'Check Status'}
          </Button>
        </div>

        <div className="mt-8 text-center">
          <TicketIcon className="h-12 w-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">
            Enter your 10-digit PNR number to check booking status
          </p>
        </div>
      </Card>
    </div>
  );
}
import axios from 'axios';
import { format } from 'date-fns';

const API_CONFIG = {
  baseURL: 'https://indian-railway-irctc.p.rapidapi.com/api/trains/v1/train',
  headers: {
    'x-rapidapi-key': '94d78fa599msh862475b23cc344ep141db6jsn74f36b49b419',
		'x-rapidapi-host': 'indian-railway-irctc.p.rapidapi.com',
		'x-rapid-api': 'rapid-api-database'
  }
};

const api = axios.create(API_CONFIG);

export const getLiveStatus = async (trainNumber) => {
  try {
    const departureDate = format(new Date(), 'yyyyMMdd');
    const response = await api.get('/status', {
      params: {
        departure_date: departureDate,
        isH5: true,
        client: 'web',
        train_number: trainNumber
      }
    });

    if (!response.data || response.data.error) {
      throw new Error(response.data?.message || 'Failed to fetch train status');
    }

    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    return {
      success: false,
      error: error.response?.data?.message || error.message
    };
  }
};

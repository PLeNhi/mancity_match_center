import axios from 'axios';

const API_BASE = process.env.API_FOOTBALL_BASE_URL || 'https://v3.football.api-sports.io';
const API_KEY = process.env.API_FOOTBALL_KEY || '';

export const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    'x-apisports-key': API_KEY,
  },
  timeout: 10000,
});

export default apiClient;

import axios from 'axios';

const API_BASE =
  process.env.NEXT_PUBLIC_API_FOOTBALL_BASE_URL || 'https://v3.football.api-sports.io';
const API_KEY = process.env.NEXT_PUBLIC_API_FOOTBALL_KEY || '';

export const privateAxios = axios.create({
  baseURL: API_BASE,
  headers: {
    'x-apisports-key': API_KEY,
  },
  timeout: 10000,
});

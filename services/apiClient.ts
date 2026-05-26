import axios from 'axios';

const API_BASE =
  process.env.NEXT_PUBLIC_API_FOOTBALL_BASE_URL || 'https://v3.football.api-sports.io';

export const apiClient = axios.create({
  baseURL: API_BASE,
  timeout: 12000,
  headers: {
    'x-apisports-key': process.env.NEXT_PUBLIC_API_FOOTBALL_KEY || '',
  },
});

// Interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default apiClient;

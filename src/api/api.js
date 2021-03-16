import * as axios from 'axios';

export default function api() {
  const headers = { Accept: 'application/json' };
  const authToken = localStorage.getItem('authToken') || null;
  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`;
  }
  return axios.create({
    baseURL: process.env.API_URL || 'http://localhost:4000',
    timeout: 31000,
    headers
  });
}

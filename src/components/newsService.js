// src/components/newsService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/news'; // Update the URL if different

const fetchNews = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export default fetchNews;

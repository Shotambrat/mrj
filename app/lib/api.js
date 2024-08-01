import axios from 'axios';

export const fetchCatalog = async () => {
  try {
    const response = await axios.get('http://213.230.91.55:8110/catalog');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch catalog');
  }
};
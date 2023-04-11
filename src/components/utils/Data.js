import axios from 'axios';

export const getProducts = async () => {
  try {
    const response = await axios.get('https://goldsergeant.github.io/testJson/');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
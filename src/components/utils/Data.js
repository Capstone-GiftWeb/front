import axios from 'axios';
import axiosInstance from '../..';
import { getCookie } from './Cookie';

export const getProducts = async () => {
  try {
    const response = await axiosInstance('/gifts');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
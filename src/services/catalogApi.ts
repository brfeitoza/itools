import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type Product = {
  id: string;
  name: string;
  price: number;
};

export const catalogApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getAll = async () => {
  const response = await catalogApi.get<Product[]>('/products');
  return response.data;
};

export const useGetAllProductsQuery = () => {
  return useQuery({ queryKey: ['all-products'], queryFn: getAll });
};

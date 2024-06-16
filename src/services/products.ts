import { useQuery } from '@tanstack/react-query';
import { api } from './api';

const getAll = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const useGetAllProductsQuery = () => {
  return useQuery({ queryKey: ['all-products'], queryFn: getAll });
};

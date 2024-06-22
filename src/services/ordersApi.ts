import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export type Order = {
  products: string[];
  status: string;
  expectedDelivery: Date | undefined;
  deliveryAddress: string | undefined;
  expectedReturn: Date | undefined;
  returnAddress: string | undefined;
};

export const ordersApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_ORDERS_API_URL || 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const useFinishOrderMutation = () => {
  return useMutation({
    mutationFn: (newOrder: Order) => {
      return ordersApi.post('/orders', newOrder);
    },
  });
};

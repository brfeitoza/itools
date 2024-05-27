import { router } from 'expo-router';
import { useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState<string>('');

  const signIn = async (user: string) => {
    setUser(user);
    router.replace('/home');
  };

  const signUp = async (user: string) => {
    setUser(user);
    router.replace('/home');
  };

  return {
    user,
    signIn,
    signUp,
  };
};

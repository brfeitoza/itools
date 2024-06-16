import { Redirect } from 'expo-router';
import { useAuth } from '../hooks/useAuth';

if (__DEV__) {
  require('../config/ReactotronConfig');
}

export default function Home() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/signin" />;
  } else {
    return <Redirect href="/home" />;
  }
}

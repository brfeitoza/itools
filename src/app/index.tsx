import { Link, Redirect } from 'expo-router';
import { useAuth } from './hooks/useAuth';
import { View } from 'react-native';

if (__DEV__) {
  require('../config/ReactotronConfig');
}

export default function Home() {
  const { user } = useAuth();

  return (
    <View
      style={{
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Link href="/signin">Sign In</Link>
      <Link href="/signup">Sign Up</Link>
      <Link href="/home">Home</Link>
      <Link href="/cart">Cart</Link>
      <Link href="/delivery">Delivery</Link>
      <Link href="/orders">Orders</Link>

    </View>
  );
  if (!user) {
    return <Redirect href="/signin" />;
  } else {
    return <Redirect href="/home" />;
  }
}

import { Link } from "expo-router";
import { Text, View } from "react-native";

const useAuth = () => {
  return {
    isAuthenticated: false,
  };
};

export default function Home() {
  const { isAuthenticated } = useAuth();

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
      <Link href="/delivery">Home</Link>
      <Link href="/orders">Cart</Link>

    </View>
  );
}

import { Link } from "expo-router";
import { View } from "react-native";
import { theme } from "../config/theme";

if (__DEV__) {
  require("../config/ReactotronConfig");
}

export default function Home() {
  return (
    <View
      style={{
        backgroundColor: theme.colors.white,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Link href="/signin">Sign In</Link>
      <Link href="/signup">Sign Up</Link>
      <Link href="/home">Home</Link>
    </View>
  );
}

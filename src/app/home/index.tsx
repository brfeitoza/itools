import { SignedInWrapper } from "@/src/components/SignedInWrapper/SignedInWrapper";
import { Text } from "react-native";

export default function Home() {
  return (
    <SignedInWrapper>
      <Text>Home</Text>
    </SignedInWrapper>
  );
}

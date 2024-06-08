import { SignedInWrapper } from '@/src/components/SignedInWrapper/SignedInWrapper';
import { useGetAllProductsQuery } from '@/src/services/products';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

export default function Home() {
  const getAllProductsQuery = useGetAllProductsQuery();

  console.log(getAllProductsQuery);

  return (
    <SignedInWrapper>
      <Text>Home</Text>
      <StatusBar style="dark" backgroundColor="red" />
    </SignedInWrapper>
  );
}

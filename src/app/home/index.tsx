import { SignedInWrapper } from '@/src/components/SignedInWrapper/SignedInWrapper';
import { useGetAllProductsQuery } from '@/src/services/products';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  const getAllProductsQuery = useGetAllProductsQuery();

  console.log(getAllProductsQuery);

  return (
    <SignedInWrapper>
      <Link href="/cart">cart</Link>
      <Link href="/delivery">delivery</Link>
      <Link href="/orders">orders</Link>

      <StatusBar style="dark" backgroundColor="red" />
    </SignedInWrapper>
  );
}

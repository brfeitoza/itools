import { CatalogItem } from '@/src/components/CatalogItem';
import { SignedInWrapper } from '@/src/components/SignedInWrapper/SignedInWrapper';
import { FlatList, Text } from 'react-native';
import { Wrapper } from './styles';
import { useCart } from '@/src/hooks/useCart';
import { useGetAllProductsQuery } from '@/src/services/catalogApi';

export default function Home() {
  const { data, error } = useGetAllProductsQuery();

  const { addToCart } = useCart();

  if (error) return <Text>Error</Text>;

  return (
    <SignedInWrapper>
      <Wrapper>
        <FlatList
          data={data}
          numColumns={2}
          contentContainerStyle={{
            padding: 20,
            gap: 20,
          }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          renderItem={({ item }) => (
            <CatalogItem
              name={item.name}
              price={item.price}
              urlImage={require('../../assets/betoneira.png')}
              onPress={() => addToCart(item)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </Wrapper>
    </SignedInWrapper>
  );
}

import { CatalogItem } from '@/src/components/CatalogItem';
import { SignedInWrapper } from '@/src/components/SignedInWrapper/SignedInWrapper';
import { useGetAllProductsQuery } from '@/src/services/products';
import { FlatList, Text } from 'react-native';
import { Wrapper } from './styles';

export default function Home() {
  const { data, error } = useGetAllProductsQuery();

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
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </Wrapper>
    </SignedInWrapper>
  );
}

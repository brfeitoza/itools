import { useCart } from '@/src/hooks/useCart';
import { FlatList } from 'react-native';
import { ItemImage, ItemTitle, ItemWrapper } from './styles';

type ItemProps = { title: string; removeFromCart: () => void };

export const Item = ({ title, removeFromCart }: ItemProps) => (
  <ItemWrapper onPress={removeFromCart}>
    <ItemImage
      resizeMode="stretch"
      source={require('../../assets/betoneira.png')}
    />
    <ItemTitle>{title}</ItemTitle>
  </ItemWrapper>
);

const ItemList = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <FlatList
      data={cart}
      nestedScrollEnabled={true}
      scrollEnabled={false}
      contentContainerStyle={{
        paddingVertical: 20,
        gap: 20,
      }}
      renderItem={({ item }) => (
        <Item
          title={item.name}
          removeFromCart={() => removeFromCart(item.id)}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ItemList;

import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-paper';
import { ItemsCount, ItemsCountWrapper } from './styles';

type CartButtonProps = {
  itemsCount: number;
  onPress: () => void;
};

export const CartButton = ({ itemsCount, onPress }: CartButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon source={require('../../assets/cart-icon.png')} size={35} />
      {itemsCount > 0 && (
        <ItemsCountWrapper>
          <ItemsCount>{itemsCount}</ItemsCount>
        </ItemsCountWrapper>
      )}
    </TouchableOpacity>
  );
};

import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-paper';
import {ItemsCount, ItemsCountWrapper} from './styles';
import {useState} from 'react';

export const CartButton = () => {
  const [itemsCount] = useState(3);

  return (
    <TouchableOpacity>
      <Icon source={require('../../assets/cart-icon.png')} size={35} />
      {itemsCount > 0 && (
        <ItemsCountWrapper>
          <ItemsCount>{itemsCount}</ItemsCount>
        </ItemsCountWrapper>
      )}
    </TouchableOpacity>
  );
};

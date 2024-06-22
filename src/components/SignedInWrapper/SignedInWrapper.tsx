import { LogoSmall } from '../LogoSmall';
import { Banner, Toolbar } from './styles';
import { CartButton } from '../CartButton/CartButton';
import { SafeAreaWrapper } from '../SafeAreaWrapper';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { useCart } from '@/src/hooks/useCart';

type SignedInWrapperProps = {
  children: React.ReactNode;
};

export const SignedInWrapper = ({ children }: SignedInWrapperProps) => {
  const { cart } = useCart();

  const cartLength = cart.length;

  return (
    <SafeAreaWrapper>
      <Toolbar>
        <TouchableOpacity onPress={() => router.replace('/home')}>
          <LogoSmall />
        </TouchableOpacity>
        <CartButton
          itemsCount={cartLength}
          onPress={() => router.replace('/cart')}
        />
      </Toolbar>

      <Banner source={require('../../assets/banner.png')} />

      {children}
    </SafeAreaWrapper>
  );
};

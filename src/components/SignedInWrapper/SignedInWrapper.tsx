import { LogoSmall } from '../LogoSmall';
import { Banner, Toolbar } from './styles';
import { CartButton } from '../CartButton/CartButton';
import { SafeAreaWrapper } from '../SafeAreaWrapper';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

type SignedInWrapperProps = {
  children: React.ReactNode;
};

export const SignedInWrapper = ({ children }: SignedInWrapperProps) => {
  return (
    <SafeAreaWrapper>
      <Toolbar>
        <TouchableOpacity onPress={() => router.replace('/home')}>
          <LogoSmall />
        </TouchableOpacity>
        <CartButton itemsCount={0} onPress={() => router.replace('/cart')} />
      </Toolbar>

      <Banner source={require('../../assets/banner.png')} />

      {children}
    </SafeAreaWrapper>
  );
};

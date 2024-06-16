import { LogoSmall } from '../LogoSmall';
import { Banner, Toolbar, Wrapper } from './styles';
import { CartButton } from '../CartButton/CartButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type SignedInWrapperProps = {
  children: React.ReactNode;
};

export const SignedInWrapper = ({ children }: SignedInWrapperProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Wrapper style={{ paddingTop: insets.top }}>
      <Toolbar>
        <LogoSmall />
        <CartButton />
      </Toolbar>

      <Banner source={require('../../assets/banner.png')} />

      {children}
    </Wrapper>
  );
};

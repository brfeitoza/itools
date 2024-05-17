import {LogoSmall} from '../../components/LogoSmall';
import {Banner, Toolbar, Wrapper} from './styles';
import {CartButton} from '../../components/CartButton/CartButton';

type SignedInWrapperProps = {
  children: React.ReactNode;
};

export const SignedInWrapper = ({children}: SignedInWrapperProps) => {
  return (
    <Wrapper>
      <Toolbar>
        <LogoSmall />
        <CartButton />
      </Toolbar>

      <Banner source={require('../../assets/banner.png')} />

      {children}
    </Wrapper>
  );
};

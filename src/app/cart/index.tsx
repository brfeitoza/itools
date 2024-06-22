import { ScrollView } from 'react-native';
import ItemList from '../../components/ItemList/ItemList';
import { ActionBar } from '../../components/ActionBar/ActionBar';
import { SignedInWrapper } from '@/src/components/SignedInWrapper/SignedInWrapper';
import { CartDetailsText, CartDetailsWrapper, Title, Wrapper } from './styles';

export default function Cart() {
  return (
    <SignedInWrapper>
      <Wrapper>
        <ScrollView>
          <Title>Meu Carrinho</Title>
          <ItemList />
        </ScrollView>
        <CartDetailsWrapper>
          <CartDetailsText>Valor produtos: R$ 79,92 o dia</CartDetailsText>
          <CartDetailsText>Frete: R$ 10,00</CartDetailsText>
          <CartDetailsText>Valor total: R$ 89,92</CartDetailsText>
        </CartDetailsWrapper>
      </Wrapper>
      <ActionBar />
    </SignedInWrapper>
  );
}

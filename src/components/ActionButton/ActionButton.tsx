import { useCart } from '@/src/hooks/useCart';
import { useFinishOrderMutation } from '@/src/services/ordersApi';
import { router } from 'expo-router';
import { ButtonText, ButtonWrapper } from './styles';

export const ActionButton = () => {
  const { cart, clearCart } = useCart();
  const { mutate: finshOrder } = useFinishOrderMutation();

  const handleFinishOrder = () => {
    const products = cart.map((product) => product.id);

    finshOrder({
      products,
      status: 'pending',
      expectedDelivery: new Date(),
      deliveryAddress: 'Rua 123, nº 123',
      expectedReturn: new Date(),
      returnAddress: 'Rua 123, nº 123',
    });

    clearCart();

    router.replace('/home');
  };

  return (
    <ButtonWrapper>
      <ButtonText onPress={handleFinishOrder}>Finalizar</ButtonText>
    </ButtonWrapper>
  );
};

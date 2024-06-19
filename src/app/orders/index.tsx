import { Text, View } from 'react-native';
import { ActionBar } from '../../components/ActionBar/ActionBar';
import { SignedInWrapper } from '@/src/components/SignedInWrapper/SignedInWrapper';

export default function Delivery() {
  return (
    <View>
      <SignedInWrapper>
        <Text>Details</Text>
      </SignedInWrapper>
      <Text>
        Valor produtos: R$ 79,92 o dia Frete: R$ 10,00 Valor total: R$ 89,92
      </Text>
      <ActionBar />
    </View>
  );
}

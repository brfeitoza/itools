import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { Container, Title
} from './styles';
import ItemList from "../../components/ItemList/ItemList";
import { ActionBar } from "../../components/ActionBar/ActionBar";
import { SignedInWrapper } from '@/src/components/SignedInWrapper/SignedInWrapper';

export default function Delivery() {  return (
    <SafeAreaView>
        <SignedInWrapper>
          <Text>Details</Text>
        </SignedInWrapper>
        <Text style={{  }} >
          Valor produtos: R$ 79,92 o dia
          Frete: R$ 10,00
          Valor total: R$ 89,92
      </Text>
      <ActionBar></ActionBar>
    </SafeAreaView>
  )
}


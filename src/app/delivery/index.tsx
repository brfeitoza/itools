import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import ItemList from "../../components/ItemList/ItemList";
import { ActionBar } from "../../components/ActionBar/ActionBar";
import { SignedInWrapper } from '@/src/components/SignedInWrapper/SignedInWrapper';

export default function Delivery() {  return (
    <SafeAreaView style={styles.container}>
        <SignedInWrapper>
          <Text>Details</Text>
        </SignedInWrapper>
        <ItemList />
        <Text style={styles.title}>
          Valor produtos: R$ 79,92 o dia
          Frete: R$ 10,00
          Valor total: R$ 89,92
      </Text>
      <ActionBar></ActionBar>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ffff'
  },
  title: {
    fontSize: 20,
    color: '#FF0F00',
    fontWeight: 'bold',
    marginLeft: 150, // Margem direita zero
  },
});

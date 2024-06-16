import { SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';
import ItemList from '../../components/ItemList/ItemList';
import { ActionBar } from '../../components/ActionBar/ActionBar';
import { SignedInWrapper } from '@/src/components/SignedInWrapper/SignedInWrapper';

export default function Cart() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SignedInWrapper>
          <Text style={styles.title}>Meu Carrinho</Text>
        </SignedInWrapper>

        <ItemList />
      </ScrollView>
      <Text style={[styles.subTitle, styles.subRight, styles.resumeCart]}>
        {`
              Valor produtos: R$ 79,92 o dia
              Frete: R$ 10,00
              Valor total: R$ 89,92`}
      </Text>
      <ActionBar></ActionBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  title: {
    fontSize: 20,
    color: '#FF0F00',
    fontWeight: 'bold',
    marginLeft: 20, // Margem direita zero
    marginTop: 20,
    marginBottom: 20,
  },
  subRight: {
    marginLeft: 120,
  },
  subTitle: {
    fontSize: 15,
    color: '#FF0F00',
    fontWeight: 'bold',
  },
  resumeCart: {
    marginBottom: 20,
  },
});

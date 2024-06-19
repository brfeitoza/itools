import { StyleSheet, Text, View } from 'react-native';
import { ActionButton } from '../ActionButton/ActionButton';

export const ActionBar = () => {
  return (
    <View style={styles.viewBar}>
      <Text style={styles.labelAction}>Continuar comprando</Text>
      <ActionButton></ActionButton>
    </View>
  );
};

const styles = StyleSheet.create({
  labelAction: {
    fontSize: 15,
    color: '#FFFF',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  viewBar: {
    flexDirection: 'row',
    height: 80,
    padding: 10,
    backgroundColor: '#232222',
  },
});

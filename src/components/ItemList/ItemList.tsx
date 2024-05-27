import { FlatList, StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Betoneira',
    urlImage: require('../../assets/betoneira.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Caixa de Ferramentas',
    urlImage: require('../../assets/caixa.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Furadeira',
    urlImage: require('../../assets/furadeira.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d90',
    title: 'Serra Circular',
    urlImage: require('../../assets/makita.png'),
  },
];

type ItemProps = {title: string, urlImage: any};

export const Item = ({title, urlImage}: ItemProps) => (
  <View style={styles.item}>
      <Image
        style={styles.stretch}
        source={urlImage}
      />
    <Text style={styles.title}>{title}</Text>

  </View>

);

const ItemList: React.FC = () => {
  return (
      <FlatList
        data={DATA}
        nestedScrollEnabled={true}
        scrollEnabled={false}
        renderItem={({ item }) => <Item title={item.title} urlImage={item.urlImage} />}
        keyExtractor={item => item.id}
      />
  );
};


const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row', // Alinha itens na mesma linha
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
  
  },
  title: {
    fontSize: 20,
    color: '#FF0F00',
    fontWeight: 'bold',
    marginLeft: 150, // Margem direita zero
  },
  stretch: {
    width: 60,
    height: 60,
    resizeMode: 'stretch',
  },
});
export default ItemList;
  
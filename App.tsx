import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Logo} from './src/components/Logo';

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    marginTop: 20,
    color: 'red',
  },
});

const Subtitle = () => {
  return (
    <Text style={styles.subtitle}>
      A sua rede de ferramentas favorita está de volta
    </Text>
  );
};

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={Colors.darker}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.darker} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={Colors.darker}>
        <View style={styles.wrapper}>
          <Logo />
          <Subtitle />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

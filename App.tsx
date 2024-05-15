import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Logo} from './src/components/Logo';
import {useState} from 'react';

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
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={Colors.darker}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.darker} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={Colors.darker}>
        <View style={styles.wrapper}>
          <Logo />
          <Subtitle />

          <View
            style={{
              backgroundColor: 'test',
              borderBottomColor: '#000000',
              borderBottomWidth: 1,
            }}>
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={40}
              onChangeText={text => setUsername(text)}
              value={username}
              style={{padding: 10}}
            />
          </View>
          <View
            style={{
              backgroundColor: 'test',
              borderBottomColor: '#000000',
              borderBottomWidth: 1,
            }}>
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={40}
              onChangeText={text => setEmail(text)}
              value={email}
              style={{padding: 10}}
            />
          </View>
          <View
            style={{
              backgroundColor: 'test',
              borderBottomColor: '#000000',
              borderBottomWidth: 1,
            }}>
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={40}
              onChangeText={text => setPassword(text)}
              value={password}
              style={{padding: 10}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

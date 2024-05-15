import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {App} from './src/App';

function AppRoot(): React.JSX.Element {
  return (
    <SafeAreaView style={Colors.darker}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.darker} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={Colors.darker}>
        <App />
      </ScrollView>
    </SafeAreaView>
  );
}

export default AppRoot;

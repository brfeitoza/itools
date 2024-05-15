import {DefaultTheme, PaperProvider} from 'react-native-paper';
import {SignUp} from './screens/SignUp/SignUp';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF0F00',
    secondary: 'yellow',
    gray: '#909090',
  },
};

export const App = () => {
  return (
    <PaperProvider theme={theme}>
      <SignUp />
    </PaperProvider>
  );
};

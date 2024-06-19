import { View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type SafeAreaWrapperProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export const SafeAreaWrapper = ({ children, style }: SafeAreaWrapperProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: insets.top, ...style }}>
      {children}
    </View>
  );
};

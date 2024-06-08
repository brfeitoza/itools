import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ffff'
`;
export const Title = styled(Text)`
    fontSize: 20,
    color: '#FF0F00',
    fontWeight: 'bold',
    marginLeft: 150, // Margem direita zero
`;

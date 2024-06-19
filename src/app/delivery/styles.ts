import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding-left: 28px;
  padding-right: 28px;
`;

export const Content = styled(SafeAreaView)`
  background-color: #ffff;
  flex: 1;
`;
export const ViewMap = styled.View`
  flex-direction: row;
  padding-top: 30px;
`;
export const ViewValor = styled.View`
  padding-bottom: 30px;
`;

export const TextValor = styled(Text)`
  text-align: right;
`;

export const Divider = styled.View`
  margin-top: 10px;
  margin-bottom: 40px;
  border-radius: 10px;
  height: 10px;
  background-color: #ff0f00;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: #ff0f00;
  font-weight: bold;
  margin-top: 30px;
  padding-left: 28px;
`;
export const TitleTrasnp = styled.Text`
  font-size: 20px;
  color: #ff0f00;
  font-weight: bold;
  margin-top: 80px;
  margin-bottom: 16px;
`;
export const ImgMap = styled.Image`
  width: 50px;
  height: 50px;
  margin-top: 8px;
  margin-right: 24px;
  border-radius: 10px;
`;

export const TitleEmpresa = styled.View`
  margin-left: 20px;
  width: 120px;
  border-radius: 10px;
  padding-bottom: 30px;
`;
export const TextEmpresa = styled(Text)`
  font-weight: bold;
  color: #000;
  padding-top: 5px;
`;

export const LabelCinza = styled(Text)`
  color: #ccc;
`;
export const LabelPreta = styled(Text)`
  color: #000;
`;

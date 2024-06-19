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

export const DeliveryInfo = styled.View``;
export const ViewMap = styled.View`
  flex-direction: row;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 20px;
`;
export const ViewValor = styled.View`
  padding-bottom: 5px;
`;

export const TextValor = styled(Text)`
  text-align: right;
`;

export const Divider = styled.View`
  margin-bottom: 50px;
  height: 40px;
  background-color: black;
  color: #ffff;
  flex-direction: row;
  padding-top: 7px;
  padding-left: 20px;
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
`;
export const ImgMap = styled.Image`
  width: 50px;
  height: 55px;
  margin-top: 8px;
  margin-right: 24px;
  border-radius: 10px;
`;

export const TitleEmpresa = styled.View`
  margin-left: 20px;
  width: 250px;
  border-radius: 10px;
`;
export const TextEmpresa = styled(Text)`
  font-weight: bold;
  color: #000;
  padding-top: 10px;
`;

export const LabelCinza = styled(Text)`
  color: #ccc;
`;
export const LabelBranca = styled(Text)`
  color: #ffff;
`;
export const LabelLaranja = styled(Text)`
  color: #ff0f00;
  font-weight: bold;
`;
export const LabelPreta = styled(Text)`
  color: #000;
`;

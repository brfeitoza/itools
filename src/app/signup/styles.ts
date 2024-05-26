import { Button, Divider, TextInput } from "react-native-paper";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  padding-top: 50px;
  padding-bottom: 60px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Subtitle = styled.Text`
  margin-top: 30px;
  color: red;
  font-size: 24px;
  text-align: center;
`;

export const FormWrapper = styled.View`
  width: 100%;
  margin-top: 30px;
  display: flex;
  gap: 10px;
`;

export const TextField = styled(TextInput)`
  width: 100%;
  border-radius: 50px;
  padding-left: 15px;
  padding-right: 15px;
  height: 48px;
`;

export const SignUpButton = styled(Button)`
  border-radius: 50px;
  padding-left: 15px;
  padding-right: 15px;
  height: 48px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  background-color: #ff0f00;
`;

export const SignInWithGoogleButton = styled(Button)`
  border-radius: 50px;
  padding-left: 15px;
  padding-right: 15px;
  height: 48px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  border-color: #ff0f00;
`;

export const AlreadyRegisteredWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const DividerWrapper = styled.View`
  display: flex;
  margin-top: 10px;
`;

export const DividerLine = styled(Divider)`
  background-color: #909090;
`;

export const DividerText = styled.Text`
  text-align: center;
  margin-top: -10px;
  background: white;
  width: 140px;
  align-self: center;
  color: #ff0f00;
`;

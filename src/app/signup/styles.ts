import { SafeAreaWrapper } from '@/src/components/SafeAreaWrapper';
import { Button, Divider } from 'react-native-paper';
import styled from 'styled-components/native';

export const Wrapper = styled(SafeAreaWrapper)`
  padding-top: 50px;
  padding-bottom: 60px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
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

export const SignUpButton = styled(Button)`
  border-radius: 50px;
  padding-left: 15px;
  padding-right: 15px;
  height: 48px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const SignInWithGoogleButton = styled(Button)`
  border-radius: 50px;
  padding-left: 15px;
  padding-right: 15px;
  height: 48px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  border-color: ${({ theme }) => theme.colors.primary};
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
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const DividerText = styled.Text`
  text-align: center;
  margin-top: -10px;
  background: white;
  width: 200px;
  align-self: center;
  color: ${({ theme }) => theme.colors.primary};
`;

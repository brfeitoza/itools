import { useState } from 'react';
import { Text } from 'react-native';
import { Logo } from '../../components/Logo';
import {
  AlreadyRegisteredWrapper,
  DividerLine,
  DividerText,
  DividerWrapper,
  FormWrapper,
  SignInWithGoogleButton,
  SignUpButton,
  Subtitle,
  TextField,
  Wrapper,
} from './styles';
import { theme } from '@/src/config/theme';

const RoundedOutlineInput = (props: any) => {
  const outlineStyle = {
    borderRadius: 50,
  };

  return <TextField {...props} outlineStyle={outlineStyle} />;
};

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Wrapper>
      <Logo />
      <Subtitle>A sua rede de ferramentas favorita está de volta</Subtitle>

      <FormWrapper>
        <RoundedOutlineInput
          label="Como você gostaria de ser chamado?"
          value={username}
          onChangeText={setUsername}
          mode="outlined"
        />

        <RoundedOutlineInput
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
        />

        <RoundedOutlineInput
          label="Senha"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
        />

        <SignUpButton mode="contained" onPress={() => console.log('Pressed')}>
          Cadastrar
        </SignUpButton>

        <DividerWrapper>
          <DividerLine />
          <DividerText>ou entre com</DividerText>
        </DividerWrapper>

        <SignInWithGoogleButton
          mode="outlined"
          onPress={() => console.log('Pressed')}
          textColor={theme.colors.primary}
        >
          Entre com o Google
        </SignInWithGoogleButton>

        <AlreadyRegisteredWrapper>
          <Text style={{ color: theme.colors.gray }}>Já tem uma conta? </Text>
          <Text style={{ color: theme.colors.primary }}>Entre</Text>
        </AlreadyRegisteredWrapper>
      </FormWrapper>
    </Wrapper>
  );
}

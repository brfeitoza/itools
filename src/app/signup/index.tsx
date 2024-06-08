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
  Wrapper,
} from './styles';
import { theme } from '@/src/config/theme';
import { RoundedOutlineInput } from '@/src/components/RoundedOutlineInput';
import { useAuth } from '../../hooks/useAuth';
import { Link, router } from 'expo-router';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useAuth();

  const handleSignUp = () => {
    signUp('test user');
    router.replace('/home');
  };

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

        <SignUpButton mode="contained" onPress={handleSignUp}>
          Cadastrar
        </SignUpButton>

        <DividerWrapper>
          <DividerLine />
          <DividerText>ou cadastre com o Google</DividerText>
        </DividerWrapper>

        <SignInWithGoogleButton
          mode="outlined"
          onPress={handleSignUp}
          textColor={theme.colors.primary}
        >
          Cadastrar com o Google
        </SignInWithGoogleButton>

        <AlreadyRegisteredWrapper>
          <Text style={{ color: theme.colors.gray }}>
            Já possui uma conta?{' '}
          </Text>
          <Link style={{ color: theme.colors.primary }} href="/signin">
            Entre
          </Link>
        </AlreadyRegisteredWrapper>
      </FormWrapper>
    </Wrapper>
  );
}

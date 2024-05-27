import { useState } from 'react';
import { Text } from 'react-native';
import { Logo } from '../../components/Logo';
import {
  NotRegisteredWrapper,
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
import { useAuth } from '../hooks/useAuth';
import { Link } from 'expo-router';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleSignIn = () => {
    signIn('test user');
  };

  return (
    <Wrapper>
      <Logo />
      <Subtitle>A sua rede de ferramentas favorita está de volta</Subtitle>

      <FormWrapper>
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

        <SignUpButton mode="contained" onPress={handleSignIn}>
          Entrar
        </SignUpButton>

        <DividerWrapper>
          <DividerLine />
          <DividerText>ou entre com o Google</DividerText>
        </DividerWrapper>

        <SignInWithGoogleButton
          mode="outlined"
          onPress={handleSignIn}
          textColor={theme.colors.primary}
        >
          Entrar com o Google
        </SignInWithGoogleButton>

        <NotRegisteredWrapper>
          <Text style={{ color: theme.colors.gray }}>Não possui conta? </Text>
          <Link style={{ color: theme.colors.primary }} href="/signup">
            Cadastrar
          </Link>
        </NotRegisteredWrapper>
      </FormWrapper>
    </Wrapper>
  );
}

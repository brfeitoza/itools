import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

const TextField = styled(TextInput)`
  width: 100%;
  border-radius: 50px;
  padding-left: 15px;
  padding-right: 15px;
  height: 48px;
`;

export const RoundedOutlineInput = (props: any) => {
  const outlineStyle = {
    borderRadius: 50,
  };

  return <TextField {...props} outlineStyle={outlineStyle} />;
};

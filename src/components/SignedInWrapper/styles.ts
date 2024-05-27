import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Wrapper = styled.View``;

export const Toolbar = styled.View`
  height: 70px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
`;

export const Banner = styled(Image)`
  width: 100%;
  height: 150px;
`;

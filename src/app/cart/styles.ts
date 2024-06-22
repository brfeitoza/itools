import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color: #ffff;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #ff0f00;
  font-weight: bold;
`;

export const CartDetailsWrapper = styled.View``;

export const CartDetailsText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  text-align: right;
`;

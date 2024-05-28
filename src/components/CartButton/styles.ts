import styled from 'styled-components/native';

export const ItemsCountWrapper = styled.View`
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 50px;
  height: 15px;
  width: 15px;
  position: absolute;
  top: 22px;
  left: 22px;
`;

export const ItemsCount = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  line-height: 15px;
  font-weight: 500;
`;

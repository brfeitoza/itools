import styled from 'styled-components/native';

export const ItemWrapper = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const ItemTitle = styled.Text`
  font-size: 20px;
  color: #ff0f00;
  font-weight: bold;
`;

export const ItemImage = styled.Image`
  width: 60px;
  height: 60px;
`;

import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  flex: 0.47;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lighterGray};
`;

export const ImageWrapper = styled.View`
  max-height: 160px;
  max-width: 160px;
`;

export const CatalogImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const PriceWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0;
`;

export const NameWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.black};
  align-items: center;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;

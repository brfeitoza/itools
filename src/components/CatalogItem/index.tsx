import { ImageSourcePropType } from 'react-native';
import {
  CatalogImage,
  ImageWrapper,
  Name,
  NameWrapper,
  Price,
  PriceWrapper,
  Wrapper,
} from './styles';
import { formatCurrency } from '@/src/utils';

type ItemProps = {
  name: string;
  price: number;
  urlImage: ImageSourcePropType | undefined;
};

export const CatalogItem = ({ name, price, urlImage }: ItemProps) => (
  <Wrapper>
    <ImageWrapper>
      <CatalogImage resizeMode="stretch" source={urlImage} />
    </ImageWrapper>
    <PriceWrapper>
      <Price>{`${formatCurrency.format(price)} ao dia`}</Price>
    </PriceWrapper>
    <NameWrapper>
      <Name>{name}</Name>
    </NameWrapper>
  </Wrapper>
);

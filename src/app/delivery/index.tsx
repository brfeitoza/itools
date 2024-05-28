import { ScrollView, View } from 'react-native';

import { ActionBar } from "../../components/ActionBar/ActionBar";
import { SignedInWrapper } from '@/src/components/SignedInWrapper/SignedInWrapper';
import { Title, Container, ImgMap, LabelCinza, ViewMap, LabelPreta, Divider, Content, DeliveryInfo, TitleTrasnp, TitleEmpresa, TextEmpresa, ViewValor, TextValor } from './styles';

export default function Delivery() {  return (
    <Content>
        <ScrollView>

        <SignedInWrapper>
          <Title>
            Entrega
          </Title>
        </SignedInWrapper>

        <Container >

          <ViewMap>
            <ImgMap
              source={require('@/assets/images/minimap.jpg')}
            /> 
            <ViewValor>       
              <LabelCinza variant="labelLarge">Entregar em </LabelCinza>
              <LabelPreta variant="titleMedium">Rua dos engenheiros, 1047</LabelPreta>
              <LabelCinza variant="labelLarge">Jardim Itaqua</LabelCinza>
            </ViewValor>
          </ViewMap>
          <Divider />
          <LabelPreta variant="titleMedium">Onde deixar o pedido?</LabelPreta>
          <LabelCinza variant="labelLarge" style={{ marginBottom: 16 }}>Portão da casa/prédio - portaria </LabelCinza>
          <LabelPreta variant="titleMedium">Hoje - 55 - 65 min</LabelPreta>
          <LabelCinza variant="labelLarge">Entrega: R$ 4,67</LabelCinza>
          <DeliveryInfo>
          <TitleTrasnp>
              Empresa de transporte
          </TitleTrasnp>
          <ViewMap style={{ backgroundColor: "#F3F3F3" }}>
            
            <TitleEmpresa>
              <TextEmpresa variant="titleLarge">99Entrega</TextEmpresa>
            </TitleEmpresa>
            
            <ViewValor>       
              <TextValor variant="labelLarge">Valor: 13,20</TextValor>
              <TextValor variant="labelLarge">Valor com entrega: 17,87</TextValor>
            </ViewValor>
          </ViewMap>
          </DeliveryInfo>

        </Container>

        </ScrollView>

        <ActionBar></ActionBar>


    </Content>
  )
}


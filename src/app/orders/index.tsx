import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Container, Content, DeliveryInfo, Divider, ImgMap, LabelBranca, LabelCinza, LabelLaranja, TextEmpresa, TextValor, Title, TitleEmpresa, TitleTrasnp, ViewMap, ViewValor
} from './styles';
import { Text } from 'react-native-paper';

import ItemList from "../../components/ItemList/ItemList";
import { ActionBar } from "../../components/ActionBar/ActionBar";
import { SignedInWrapper } from '@/src/components/SignedInWrapper/SignedInWrapper';

export default function Delivery() {  return (
<Content>
        <ScrollView>

        <SignedInWrapper>
          <Title>
              Olá Sr. José
          </Title>
        </SignedInWrapper>

        <Container >


          <LabelLaranja variant="titleMedium" >Acompanhe aqui os seus pedidos </LabelLaranja>
          <ViewMap style={{ backgroundColor: "#F3F3F3" }}>
            
            <TitleEmpresa>
              <TextEmpresa variant="titleMedium">Betoneira, Furadeira, Serra circular e caixa de ferramentas</TextEmpresa>
            </TitleEmpresa>
            
            <ViewValor>       
              <ImgMap
                source={require('@/assets/images/box.png')}
              /> 
            </ViewValor>
          </ViewMap>
          <Divider>

          <LabelLaranja variant="titleMedium" >Status:</LabelLaranja> 
          <LabelBranca variant="titleMedium" > aguardando coleta</LabelBranca>

          </Divider >

          <DeliveryInfo>


          <LabelLaranja variant="titleMedium" >Previsão de entrega </LabelLaranja>

          <ViewMap style={{ backgroundColor: "#F3F3F3" }}>
            
            <TitleEmpresa>
               <TextEmpresa style={{ paddingTop: 25 }} variant="titleMedium">Hoje - 06/05/2024 - 18h00</TextEmpresa>
            </TitleEmpresa>
            
            <ViewValor>       
              <ImgMap
                source={require('@/assets/images/motoka.png')}
              />
            </ViewValor>
          </ViewMap>
          </DeliveryInfo>

        </Container>

        </ScrollView>

        <ActionBar ></ActionBar>


    </Content>
  )
}


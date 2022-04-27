import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Accessory } from '../../components/Accessory';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';

import speedSvg from '../../assets/speed.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'

import { Feather } from '@expo/vector-icons'

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

export function SchedulingDetails(){
  const theme = useTheme();

  const navigation = useNavigation<any>();

  function handleConfirmRental() {
    navigation.navigate('SchedulingComplete')
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={['https://www.pngmart.com/files/21/Red-Tesla-Car-PNG-Photos.png']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Tesla</Brand>
            <Name>Model S</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 260</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="322" icon={speedSvg}/>
          <Accessory name="2.4s" icon={accelerationSvg}/>
          <Accessory name="1,020 HP" icon={forceSvg}/>
          <Accessory name="Electrical" icon={gasolineSvg}/>
          <Accessory name="Auto" icon={exchangeSvg}/>
          <Accessory name="4 Pessoas" icon={peopleSvg}/>
        </Accessories>

        <RentalPeriod>

          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}px
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}px
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 260 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 780</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmRental}
        />
      </Footer>

    </Container>
  );
}

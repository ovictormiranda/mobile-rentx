import React from 'react';

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
  About,
  Accessories,
  Footer
} from './styles';

export function CarDetails(){
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

        <About>
          Ele é um dos veículos mais vendidos na gama da marca.
          Esse sedã tem dois motores elétricos, um em cada eixo,
          e tração integral. Pode alcançar 96 km/h em 2,4 segundos
          na versão Performance
        </About>
      </Content>

      <Footer>
        <Button title="Confirmar" color=""/>
      </Footer>

    </Container>
  );
}

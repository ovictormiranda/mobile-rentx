import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

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
      </Content>

    </Container>
  );
}

import React, { useState, useRef } from 'react';
import { FlatList, ViewToken } from 'react-native';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from './styles';

interface Props {
  imagesUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: Props){
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index)
  })

  return (
    <Container>
      <ImageIndexes>
        {
          imagesUrl.map((_, index) =>( // O map recebe 2 propriedades, o item e o index, quando não queremos utilizar o item, basta passar o underline para que ele seja ignorado
            <ImageIndex
              key={String(index)}
              active={index === imageIndex}
            />
          ))
        }
      </ImageIndexes>

        <FlatList
          data={imagesUrl}
          keyExtractor={key => key}
          renderItem={({item}) => (
            <CarImageWrapper>
              <CarImage
                source={{uri: item}}
                resizeMode="contain"
              />
            </CarImageWrapper>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={indexChanged.current}
        />
    </Container>
  );
}

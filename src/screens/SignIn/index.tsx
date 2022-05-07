import React from 'react';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import theme from '../../styles/theme';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Form,
  Footer,
} from './styles';

export function SignIn(){
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Title>
          Estamos{'\n'}quase lá.
        </Title>
        <Subtitle>
          Faça seu login para começar{'\n'}uma experiência incrível.
        </Subtitle>
      </Header>

      <Form>
        <Input
          iconName="mail"
        />
      </Form>

      <Footer>
        <Button
          title="Login"
          onPress={() => {}}
          enabled={false}
          loading={false}
        />
        <Button
          title="Criar conta gratuita"
          color={theme.colors.background_secondary}
          light
          onPress={() => {}}
          enabled={true}
          loading={false}
        />

      </Footer>
    </Container>
  );
}
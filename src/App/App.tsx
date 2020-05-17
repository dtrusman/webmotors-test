import React from 'react';

import { Filter } from 'pages';

import { AppContainer, Content, Header, Image, Body } from './styles';
import logo from '../assets/webmotors.svg';

function App() {
  return (
    <AppContainer>
      <Content>
        <Header>
          <Image src={logo} alt="webmotors-logo" />
        </Header>
        <Body>
          <Filter />
        </Body>
      </Content>
    </AppContainer>
  );
}

export default App;

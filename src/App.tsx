import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import photo from "./assets/img/Rectangle 1.png"
import { Container } from './components/Container';
import { MainH1 } from './components/MainTitle';
import { Btn, BtnCont } from './components/Btn';
import { Photo } from './components/Photo';
import { Textspan } from './components/MainText';

function App() {
  return (

    <Container>
      <Photo src={photo} />
      <MainH1>Headline </MainH1>
      <Textspan>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Textspan>
      <BtnCont>
        <Btn>See more</Btn>
        <Btn>Save</Btn>
      </BtnCont>
    </Container>
  );
}

export default App;






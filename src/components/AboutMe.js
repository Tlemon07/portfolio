import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Relative, Flex  } from '../theme/grid';
import { Link } from 'react-router-dom';
//import Button from '@material-ui/core/Button';
//import CardActions from '@material-ui/core/CardActions';
import { white } from '../theme/variables';

export const Title = styled.h1`
    margin-top: 0;
    color: ${white};
`;

export const AboutMeImage = styled.div`
    height: 100vh;
    background-image: url('${require('../assets/aboutme.jpg')}');
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    text-align: center;
    color: white;

    font-size: 1em;

    h1 {
        margin-bottom: 0;
    }
`;

export const Item = styled(Link)`
  color: white;
  font-size:  1.5em;
  display:  block;
  width:  150px;
  padding-top:  10px;
  padding-bottom: 10px;
  text-align: center;
  border: 2px solid;
  border-color: #aaaaaa #444444 #444444 #aaaaaa;
`;

class AboutMe extends Component {
  render() {
    return (
    <Container>
      <AboutMeImage>
        {/* <Flex justify={'left'}> */}
        {/* <p align="right">Hi, Im Lemon! Im a developer in Tokyo. </p> */}
        {/* </Flex> */}
        <Title>Skills</Title>
        <p>HTML5 / CSS3, JavaScript, python, Bootstrap, SCSS/Sass, Git, Linux, Ruby on rails</p>
      {/* <Flex justify={'center'}>
      <Item to={'/aboutMe'}>About Me</Item>
      </Flex> */}
        <Title>Contact</Title>
        <p>info@lemon.me</p>
      </AboutMeImage>
    </Container>
    );
  }
}

export default AboutMe;
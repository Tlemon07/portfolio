import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Relative, Flex  } from '../theme/grid';
import AboutMe from './AboutMe';
import Project from './Project';
import Contact from './Contact';


export const HomeImage = styled.div`
    height: 100vh;
    background-image: url('${require('../assets/me.jpg')}');
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

class Home extends Component {
  render() {
    return (
      <Container>
          <HomeImage>
            <h1>Lemon Tanaka</h1>
            <h4>Welcome to my portpolio site.</h4>
            <p>Hi, Im Lemon! Im a developer in Tokyo. </p>
          </HomeImage>
      </Container>
    );
  }
}

export default Home;
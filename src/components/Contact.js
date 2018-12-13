import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../theme/grid';
import { Link } from 'react-router-dom';

export const ContactImage = styled.div`
    height: 100vh;
    background-image: url('${require('../assets/contact.jpg')}');
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

class Contact extends Component {
  render() {
    return (
    <Container>
          <ContactImage>
            <h2>仕事のお問合せはこちらから</h2>
            <p>Homeです</p>
          </ContactImage>
    </Container>
    );
  }
}

export default Contact;
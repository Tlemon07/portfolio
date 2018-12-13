import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Relative, Flex  } from '../theme/grid';
import { Link } from 'react-router-dom';

export const ProjectsImage = styled.div`
    height: 100vh;
    background-image: url('${require('../assets/projects.jpg')}');
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

export const Detail = styled(Link)`
  color: white;
  font-size:  0.8em;
  display:  block;
  width:  150px;
  padding-top:  10px;
  padding-bottom: 10px;
  text-align: center;
  border: 2px solid;
  border-color: #aaaaaa #444444 #444444 #aaaaaa;
`;

class Project extends Component {
  render() {
    return (
    <Container>
      <ProjectsImage>
      <h3>There are several projects that i have been working on</h3
      >
      <Flex justify={'center'}>
      <Detail to={'/aboutMe'}>View Details</Detail>
      </Flex>
      </ProjectsImage>
    </Container>
    );
  }
}

export default Project;
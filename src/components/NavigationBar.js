import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Div } from '../theme/grid';
import { white, black } from '../theme/variables';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled(Flex)`
    position: fixed;
    right: 1em;
    top: 0.9em;
`
export const NewItem = styled(Link)`
    margin-right: 20px;
    font-size: 1.0em;
    cursor: pointer;
    color: ${white};
    position: relative;
    text-decoration: none;

    &:hover {
        color: ${black};
        &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            
            z-index: -1;
            transform : scale(1.3);
        }
    }
`;



class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
          <NewItem to={'/portfolio'}>Home</NewItem>
          <NewItem to={'/portfolio/aboutMe'}>About Me</NewItem>
          <NewItem to={'/portfolio/projects'}>Projects</NewItem>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;

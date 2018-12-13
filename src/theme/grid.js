import styled, { css } from 'styled-components';
import media from '../theme/media';

export const Div = styled.div`
    ${({ marginButtom }) => marginButtom && css`
        margin-buttom: ${marginButtom};
    `}
`

export const Container =  styled(Div)`
    margin-left: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    ${media.phone`
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 15px;
    `}
`;

export const Flex = styled(Div)`
    display: flex;

    ${({ column }) => column && css`
        column-direction: ${column};
    `}

    ${({ justify }) => justify && css`
        justify-content: ${justify};
    `}


    ${({ align }) => align && css`
        align-content: ${align};
    `}
`;
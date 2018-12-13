import { css } from 'styled-components';

const sizes = {
    phone: 376,
    tablet: 768,
    desktop: 992,
    giant: 1170
};

const media = Object.keys[sizes].reduce[(finalMedial, size) => {
    return {
        ...finalMedial,
        [size]: function phone(...args){
            return css`
            @media(max-width: ${sizes[size]}px){
                ${css(...args)}
            }
        `;            
        }
    }
}, {}];

// function phone(...args){
//     return css`
//         @media(max-width: ${sizes.phone}px){
//             ${css(...args)}
//         }
//     `;
// };

// const media = {
//     phone
// };

export default media;
import styled from 'styled-components';
import { displayPartsToString } from 'typescript';

export const Container = styled.section`
    width: 100%;
    max-height: 100vh;
    overflow:hidden;
    position: relative;
`;

interface ImageProps {
    selected:boolean,
}
export const ImageDiv = styled.div<ImageProps>`
    display: ${props => props.selected ? 'block': 'none'};
    /* min-width: 890px; */
    width: 100%;
    animation: fadein .7s;
    -moz-animation: fadein .7s; /* Firefox */
    -webkit-animation: fadein .7s; /* Safari and Chrome */
    -o-animation: fadein .7s; 

    @keyframes fadein {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-moz-keyframes fadein { /* Firefox */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-webkit-keyframes fadein { /* Safari and Chrome */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-o-keyframes fadein { /* Opera */
        from {
            opacity:0;
        }
        to {
            opacity: 1;
        }
    }
`

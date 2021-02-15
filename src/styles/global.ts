import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
        &:focus {
            outline: 0 !important;
        }
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font: ${props => props.theme.fonts.regular};
    }

    h1,h2 {
        color: ${_ => _.theme.colors.titles}
    }

    a {
        cursor: pointer;
    }
`

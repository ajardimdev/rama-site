import styled from 'styled-components'
import theme from '../theme';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

export const FakeHeaderPadding = styled.div`
    height:100px;
    width:100%;
    background-color: ${theme.colors.background};
    z-index:1;
`;

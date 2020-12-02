import styled from 'styled-components';

interface IContainer {
    scrollY:number
}

export const Container = styled.header<IContainer>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 12px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height:100px;
    background-color: ${({scrollY, theme}) => scrollY > 100 ? theme.colors.background  : '#00000012'};

    ul {
        padding:0px;
        margin:0px;
        list-style:none;
    }

    li {
        display: inline;

        a {
            padding: 12px;
        }
    }

    #search svg {
        width: 22px;
        height: 22px;
    }
`;

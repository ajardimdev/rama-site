import styled from 'styled-components';

interface IContainer {
    scrollY:number
}

export const Container = styled.header<IContainer>`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 12px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-height:100px;
    background-color: ${({scrollY, theme}) => scrollY > 100 ? theme.colors.background  : '#0000004d'};

    .header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
    }


    ul {
        padding:0px;
        margin:0px;
        list-style:none;
    }

    li {
        display: inline;

        a {
            padding: 12px;
            color: ${_ => _.theme.colors.text};
            text-decoration: none;
        }
    }

    #search svg {
        width: 30px;
        height: 30px;
    }

    #menu-mobile {
        display: none;
    }

    @media(max-width: 576px) {
        nav#menu-desktop {
            display: none;
        }

        #search  {
            display: none;
        }


        nav#menu-mobile {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            #toggle {
                width: 28px;
                height: 30px;
            }

            #search {
                height: 30px;
                width: 30px;
                display: flex;
                align-items: center;
                margin-right:12px;
            }

            #toggle div {
                width: 100%;
                height: 5px;
                background: white;
                margin: 4px auto;
                transition: all 0.3s;
                backface-visibility: hidden;
            }

            &.on {
                #toggle {
                    .one {
                        transform: rotate(45deg) translate(5px, 5px);
                    }

                    .two {
                        opacity: 0;
                    }

                    .three {
                        transform: rotate(-45deg) translate(7px, -8px);
                    }
                }

                #menu {
                    display: flex;
                }


            }
        }
        ul {
            padding:0px;
            margin:0px;
            list-style:none;
            width: 100%;
            text-align: center;
        }

        li {
            display: block;
            padding: 12px;

            a {
                padding: 12px;
            }
        }
    }
`;

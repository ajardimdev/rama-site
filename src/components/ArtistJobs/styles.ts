import styled from 'styled-components';

interface YouTubeProps {
    frameborder: number
    allowfullscreen: boolean

}

interface SpotifyProps {
    allowtransparency: boolean
}
interface SectionProps {
    background: string
}


export const SpotifyPlayer = styled.iframe<SpotifyProps>`
    border: 0;
    border-radius: 6px;
    margin-top: 16px;
    width: 889px;
    height: 80px;
    max-width: 100%;
    align-self: center;
    background-color: transparent;

`

export const YouTubePlayer = styled.iframe<YouTubeProps>`
    border: 0;
    border-radius: 6px;
    margin-top: 16px;
    width: 889px;
    height: 500px;
    max-width: 100%;
    align-self: center;

`

export const Container = styled.section<SectionProps>`
    width: 100%;
    position: relative;
    background-color: #fff;
    width: 100%;
    background: ${({ theme, background }) => background  === "white" ? theme.colors.section_white : "-webkit-linear-gradient(170deg, white 0%, white, 35%, #121214 35%, #121214 100%)" } ;
    background: ${({ theme, background }) => background  === "white" ? theme.colors.section_white : "-o-linear-gradient(170deg, white 0%, white, 35%, #121214 35%, #121214 100%)" } ;
    background: ${({ theme, background }) => background  === "white" ? theme.colors.section_white : "-moz-linear-gradient(170deg, white 0%, white, 35%, #121214 35%, #121214 100%)" } ;
    background: ${({ theme, background }) => background  === "white" ? theme.colors.section_white : "linear-gradient(170deg, white 0%, white, 35%, #121214 35%, #121214 100%)" } ;
    min-height: 100vh;
    padding-bottom: 8em;

    img.mark_top_white {
        margin-top: -150px;
        width:100%;
    }

    .album_content {
        position: relative;
        background-color: ${({ theme, background }) => background  === "white" ? theme.colors.section_white : theme.colors.section_black };
        color: ${({ theme, background }) => background  === "white" ? theme.colors.black : theme.colors.white };

        &--in {
            padding-left: 15px;
            padding-right: 15px;
            padding-bottom: 60px;
            height: fit-content;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;


        }
    }

    @media(min-width: 576px) {
        .album_content {
            position: absolute;
            left: 0;
            right: 0;
            z-index: 1;
            left: 0;
            right: 0;

            &--in {
                padding-left: 15px;
                padding-right: 15px;
                padding-bottom: 60px;
                display: flex;
                flex: 1;
                flex-direction: column;
                justify-content: flex-start;


            }
        }
    }


    div.title-area {
        display: flex;
        flex-direction: row;
        justify-content: start;
        padding-right: 15px;
        padding-left: 15px;
        height: 100px;
        align-items: center;

        h2 {
            margin-left: 30px;
        }
    }

    div.carousel-area {
        display: grid;
    }

    @media(min-width: 576px) {
        div.carousel-area {
            grid-template-columns: repeat(auto-fill, minmax(400px,1fr));
            grid-gap: 15px;
            padding: 15px;
        }
    }

    figure {
        position: relative;
        border-radius: 4px;
    }

    figure:hover {
        cursor: pointer;
        image {
            opacity:0.25;
        }
        figcaption {
            opacity: 1;
            animation: fadein .3s;
            -moz-animation: fadein .3s; /* Firefox */
            -webkit-animation: fadein .3s; /* Safari and Chrome */
            -o-animation: fadein .3s; /* Opera */
        }
    }

    figcaption {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        opacity: 0;
        color: #fff;
        border-radius: 4px;
        background-color: ${_ => _.theme.colors.default_overlay_image_color};

        padding:8px;

        div {
            display:flex;
            flex-direction: column;
            justify-content: flex-end;
            height:100%;
            padding:1rem;
            text-align: justify;
            span {
                font: ${_ => _.theme.fonts.highlight_title};
            }
            p {
                font: ${_ => _.theme.fonts.highlight_description};
            }
            a {
                align-self: flex-end;
            }
        }
    }

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
`;



export const ImageDiv = styled.div`
    width: 100%;
    animation: fadein .3s;
    -moz-animation: fadein .3s; /* Firefox */
    -webkit-animation: fadein .3s; /* Safari and Chrome */
    -o-animation: fadein .3s; /* Opera */
    border-radius: 4px;
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

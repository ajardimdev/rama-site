import styled from 'styled-components';


export const Container = styled.section`
    width: 100%;
    position: relative;
    background-color: #fff;
    width: 100%;
    background: -webkit-linear-gradient(170deg, white 0%, white, 35%, #121214 35%, #121214 100%);
    background: -o-linear-gradient(170deg, white 0%, white, 35%, #121214 35%, #121214 100%);
    background: -moz-linear-gradient(170deg, white 0%, white, 35%, #121214 35%, #121214 100%);
    background: linear-gradient(170deg, white 0%, white, 35%, #121214 35%, #121214 100%);

    img.mark_top_white {
        margin-top: -150px;
        width:100%;
    }

    div.title-area {
        display: flex;
        flex-direction: row;
        justify-content: start;
        padding-right: 15px;
        padding-left: 15px;
        height: 100px;
        align-items: center;

        h1 {
            margin-left: 30px;
        }
    }

    @media(min-width: 576px) {
        div.bio {
            grid-template-columns: repeat(auto-fill, minmax(600px,1fr));
            grid-gap: 15px;
        }
    }

    div.bio {
        display: grid;

        img {
            width: 100%;
        }

        .card_bio {
            background-color: #fff;
            width: 100%;
            z-index: 1;
        }
    }

    .bio {
        margin-bottom:30px;
        z-index:35;
    }
.card_bio {
    padding: 12px;
    color: rgb(51, 50, 92);
    width: 100%;
}

.card_bio p {
    margin-bottom:12px;
    text-align: justify;
}

 @media(min-width: 768px) {
    .card_bio {
        padding: 35px;
        margin-top:-80px;
        height: fit-content;
        max-width: 629px;
        width: 100%;
        text-align: justify;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.22);
    }
}

@media(min-width: 1024px) {
    .bio {
        grid-template-columns: repeat(auto-fill, minmax(500px,1fr)) !important;
    }

    .card_bio {
        height: fit-content;
        max-width: 500px;
        margin-top:-80px;
        margin-left:-80px;
        height: fit-content;
        border-radius: 6px;
    }
}

@media(min-width: 1200px) {
    .bio {
        grid-template-columns: repeat(auto-fill, minmax(600px,1fr)) !important;
    }

    .card_bio {
        height: fit-content;
        max-width: 600px;
    }
}

@media(min-width: 1441px) {
    .bio {
        grid-template-columns: repeat(auto-fill, minmax(700px,1fr)) !important;
    }

    .card_bio {
        height: fit-content;
        max-width: 700px;
    }
}


@media(min-width: 1800px) {
    .bio {
        grid-template-columns: repeat(auto-fill, minmax(900px,1fr)) !important;
    }

    .card_bio {
        height: fit-content;
        max-width: 700px;
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



export const Image = styled.img`
    width: 100%;
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
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

import React from 'react';
import ReactMarkdown from 'react-markdown'

import logo from '../../assets/logo_small.png'
import mark_white_top from '../../assets/mark-white-top.png'

import Image from 'next/image'

import { base_url } from '../../apis/rama-cms/constants';
import { Container, ImageDiv } from './styles';
const image_url = base_url

function Bio({ name, bio, bio_image }) {

     return (
        <Container >
            <img className="mark_top_white" src={mark_white_top} alt="" />
            <div className="title-area">
                <img src={logo} alt="Rama" />
                <h1>{name}</h1>
            </div>

            <div className="bio">
                {bio_image && (
                    <ImageDiv >
                        <Image src={bio_image.url} alt={bio} width={640} height={490} layout="responsive"/>
                    </ImageDiv>
                )}

                <div className="card_bio">
                    <ReactMarkdown>
                        {bio}
                    </ReactMarkdown>
                </div>
            </div>
        </Container>
    );
};

export default Bio;

import React, { useEffect, useState } from 'react';

import logo from '../../assets/logo_small.png'
import mark_white_top from '../../assets/mark-white-top.png'

import { base_url } from '../../apis/rama-cms/constants';
import { Container, Image } from './styles';
import Link from 'next/link';

const image_url = base_url

function HighlightArtists({ artists, title, background }) {
    if (!artists || (artists &&  !artists.length)){
        return null;
    }

     return (
        <Container background={background} >
            <img className="mark_top_white" src={mark_white_top} alt="" />
            <div className="title-area">
                <img src={logo} alt="Rama" />

                <h2>{title ?? 'Artistas'}</h2>
            </div>

            <div className="carousel-area">

                {artists.map((artist,index) => {
                    return (
                        <Link key={index} href={`/artistas/${artist.slug}`}  >
                            <figure key={index}>
                                    <Image src={`${image_url}${artist.highlight_image.url}`} alt={artist.name} title={artist.name} />
                                <figcaption>
                                    <div>
                                        <span>{artist.name}</span>
                                        {artist.resume && (
                                            <p>{artist.resume.substring(0, 120)}{artist.resume.length > 119 && '...'}</p>
                                        )}

                                        <a>Ver mais...</a>
                                    </div>
                                </figcaption>
                            </figure>
                        </Link>
                    )
                })}
            </div>
        </Container>
    );
};

export default HighlightArtists;

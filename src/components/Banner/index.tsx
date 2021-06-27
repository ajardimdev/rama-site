import React, { useEffect, useState } from 'react';

import Image from 'next/image'

import { base_url } from '../../apis/rama-cms/constants';
import { increment } from './functions';
import { Container, ImageDiv } from './styles';

const image_url = base_url

function Banner({ images }) {
    const [selected, setSelected] = useState<number>(0)

    useEffect(() => {
        if (!images || (images &&  (!images.length || images.length == 1 ))){
            return;
        }

        setTimeout(() => {
            const limit = images.length -1
            const index = increment(0, selected, limit)

            setSelected(index)
        }, 8000)
    }, [selected])

    if (!images || (images &&  !images.length)){
        return null;
    }

     return (
        <Container  >
            {images.map((image,index) => {
                if(image.type === 'video') {
                    return (
                        <ImageDiv key={index} selected={selected === index}>
                            <video autoPlay muted loop  id="video" width="100%">
                                <source src={`${image_url}${image.media.url}`} type="video/mp4" />
                            </video>
                        </ImageDiv>
                    )
                }

                return  (
                    <ImageDiv key={index}  selected={selected === index}>
                        <Image src={`${image_url}${image.media.url}`} alt={image.text} width={1440} height={720} layout="responsive"/>
                    </ImageDiv>
                )
            })}

        </Container>
    );
};

export default Banner;

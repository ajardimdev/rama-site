import { Console } from 'console';
import React, { useEffect, useState } from 'react';

import { base_url } from '../../apis/rama-cms/constants';
import { increment } from './functions';
import { Container, Image } from './styles';

const image_url = base_url

function Banner({ images }) {
    const [selected, setSelected] = useState<number>(0)

    useEffect(() => {
        if (!images || (images &&  !images.length)){
            return;
        }

        setTimeout(() => {
            const limit = images.length -1
            const index = increment(0, selected, limit)

            setSelected(index)
        }, 6000)
    }, [selected])


    if (!images || (images &&  !images.length)){
        return null;
    }

     return (
        <Container  >
            {/* <video autoPlay muted loop  id="video">
                <source src="/demo.mp4" type="video/mp4" />
            </video> */}

            {images.map((image,index) => {
                return <Image selected={selected === index} src={`${image_url}${image.media.url}`} alt={image.text} title={images[selected].text} />
            })}

        </Container>
    );
};

export default Banner;

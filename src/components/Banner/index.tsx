import React from 'react';

import { Container } from './styles';

const Banner: React.FC = () => {
  return (
    <Container>
        {/* <video autoPlay muted loop  id="video">
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
        </video> */}

        <img src="https://loremflickr.com/g/1280/720/cat" alt="random" />
    </Container>
  );
};

export default Banner;

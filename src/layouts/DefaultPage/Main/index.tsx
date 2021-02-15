import React from 'react'

import { Container } from './styles'
import logo_w from '../../../assets/logo_small_white.png'

const Main: React.FC = ({children}) => {
  return (
    <Container>
        <img className="r-END" src={logo_w} alt="Rama" />
        {children}
    </Container>
  )
}

export default Main

import React, { useEffect, useState } from 'react'
import Logo from '../../../assets/logo-horizontal-white_90.svg'
import Search from '../../../assets/search.svg'

import { Container } from './styles'

let listener

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    listener = window.addEventListener('scroll', e => {
        setScrollY(window.scrollY)
    })

    return () => {
        window.removeEventListener('scroll', listener)
    }
  }, [])

  const search = e => {

  }

  return (
    <Container scrollY={scrollY} >
        <Logo />
        <nav>
            <ul>
                <li><a>A Rama</a></li>
                <li><a>Mídia</a></li>
                <li><a>Artistas</a></li>
                <li><a>TV Rama</a></li>
                <li><a>Loja</a></li>
            </ul>
        </nav>
        <a id="search" onClick={search}>
            <Search />
        </a>
    </Container>
  )
}

export default Header

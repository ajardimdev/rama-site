import React, { useEffect, useState } from 'react'
import Logo from '../../../assets/logo-horizontal-white_90.svg'
import Search from '../../../assets/search.svg'

import { Container } from './styles'

let listener

const Menu = () => (
    <ul id='menu'>
        <li><a>A Rama</a></li>
        <li><a>Mídia</a></li>
        <li><a>Artistas</a></li>
        <li><a>TV Rama</a></li>
        <li><a>Loja</a></li>
    </ul>
)

const SearchButton = ({ search }) => {
    return (
        <a id='search' onClick={search}>
            <Search />
        </a>
    )
}

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const [toggleMobile, setToggleMobile] = useState(false)

  useEffect(() => {
    listener = window.addEventListener('scroll', e => {
        setScrollY(window.scrollY)
    })

    return () => {
        window.removeEventListener('scroll', listener)
    }
  }, [])

  const search = e => {
    e.preventDefault()
  }
  const toggleMenuMobile = e => {
    e.preventDefault()
    setToggleMobile(!toggleMobile)
  }

  return (
    <Container scrollY={scrollY} >
        <div className="header">
            <Logo />
            <nav id='menu-mobile' className={toggleMobile ? 'on' : ''} >

                <SearchButton search={search} />

                <a id="toggle" onClick={toggleMenuMobile} >
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </a>

            </nav>

            <nav id='menu-desktop' >
                <Menu />
            </nav>

            <SearchButton search={search} />
        </div>


        {toggleMobile && <Menu />}


    </Container>
  )
}

export default Header

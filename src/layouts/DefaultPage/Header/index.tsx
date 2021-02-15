import React, { useEffect, useState } from 'react'
import Logo from '../../../assets/logo-horizontal-white_90.svg'
import Search from '../../../assets/search-light.svg'
import Link from 'next/link'

import { Container } from './styles'

let listener

const Menu = () => (
    <ul id='menu'>
        <li>
            <Link href='/sobre-a-rama'>
                <a>A Rama</a>
            </Link>
        </li>

        <li>
            <Link href='/noticias'>
                <a>Notícias</a>
            </Link>
        </li>

        <li>
            <Link href='/artistas'>
                <a>Artistas</a>
            </Link>
        </li>

        <li>
            <Link href='/lancamentos'>
                <a>Lançamentos</a>
            </Link>

        </li>

        <li>
            <Link href='/tv-rama'>
                <a>TV Rama</a>
            </Link>
        </li>

        <li>
            <a href="https://google.com" target="_blank">Loja</a>
        </li>
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
            <Link href="/">
                <Logo />
            </Link>
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

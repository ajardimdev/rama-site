import React, { useEffect, useState } from 'react'
import Logo from '../../../assets/logo-horizontal-white_90.svg'
import Search from '../../../assets/search-light.svg'
import Link from 'next/link'

import { Container } from './styles'

let listener

const Menu = () => (
    <ul id='menu'>
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
    </ul>
)

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

                <a id="toggle" onClick={toggleMenuMobile} >
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </a>

            </nav>

            <nav id='menu-desktop' >
                <Menu />
            </nav>
        </div>

        {toggleMobile && <Menu />}



    </Container>
  )
}

export default Header

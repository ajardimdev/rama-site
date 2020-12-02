import React from 'react'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const DefaultPage: React.FC = ({children}) => {

  return (
    <>
        <Header />
        <Main>{children}</Main>
        <Footer />
    </>
  )
}

export default DefaultPage

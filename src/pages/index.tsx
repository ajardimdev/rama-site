import React from 'react'
import Head from 'next/head'

import { Container} from '../styles/pages/Home'

import DefaultPage from '../layouts/DefaultPage'
import Banner from '../components/Banner'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>

        <title>Rama Records</title>

      </Head>

      <DefaultPage>

        <Banner />

      </DefaultPage>
    </Container>
  )
}

export default Home

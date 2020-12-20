import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { Container} from '../styles/pages/Home'
import DefaultPage from '../layouts/DefaultPage'
import Banner from '../components/Banner'
import banner_endpoints from "../apis/rama-cms/endpoints/banner";
import api from "../apis/rama-cms";

export const getBanners = async () => {
    const endpoint = banner_endpoints.graphql()
    const { data, ok } = await api.post<any>(endpoint, {
        query: `{
            banners (
                limit: 6,
                where: { page : "home" },
                sort: "order"
            ) {
                id,
                text,
                legend,
                type,
                media {
                    url
                }
            }
        }`
    })

    if (ok) {
        return data.data.banners
    }
}

interface StaticProps {
    images: BannerImagem[]
}

interface BannerImagem {
    type: string,
    order: number,
    text: string,
    legend: string,
    media: Media,
}
interface Media {
    url: string,
}

const Home: React.FC<StaticProps> = ({ images }) => {
  return (
    <Container>
      <Head>
        <title>Rama Records - Principal</title>
      </Head>
      <DefaultPage>
        <Banner images={images} />
      </DefaultPage>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    const images = await getBanners()
    return {
        props: {
            images
        }
    }
}

export default Home

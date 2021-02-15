import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { Container} from '../styles/pages/Home'
import DefaultPage from '../layouts/DefaultPage'
import Banner from '../components/Banner'
import banner_endpoints from "../apis/rama-cms/endpoints/banner";
import artist_endpoints from "../apis/rama-cms/endpoints/artist";
import api from "../apis/rama-cms";
import HighlightArtists from '../components/HighLightArtists'

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

export const getArtists = async () => {
    const endpoint = artist_endpoints.graphql()
    const { data, ok } = await api.post<any>(endpoint, {
        query: `{
            artists (
                start:0,
                limit: 50
            ) {
                slug,
                name,
                resume,
                highlight_image {
                    url
                },
                bio
            }
        }`
    })

    if (ok) {
        return data.data.artists
    }
}

interface StaticProps {
    images: BannerImagem[]
    artists: Artist[]
}

interface BannerImagem {
    type: string,
    order: number,
    text: string,
    legend: string,
    media: Media,
}
interface Artist {
    slug: string,
    name: string,
    resume: string,
    highlight_image: Media,
    bio: string
}
interface Media {
    url: string,
}

export const getStaticProps: GetStaticProps = async () => {
    const images = await getBanners()
    const artists = await getArtists()

    return {
        props: {
            images,
            artists
        }
    }
}

const Home: React.FC<StaticProps> = ({ images, artists }) => {
  return (
    <Container>
      <Head>
        <title>Rama Records - Principal</title>
      </Head>

      <DefaultPage>
        <Banner images={images} />
        <HighlightArtists artists={artists} />
      </DefaultPage>
    </Container>
  )
}



export default Home

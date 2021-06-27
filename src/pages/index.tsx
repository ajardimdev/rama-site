import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { Container} from '../styles/pages/Home'
import DefaultPage from '../layouts/DefaultPage'
import Banner from '../components/Banner'
import banner_endpoints from "../apis/rama-cms/endpoints/banner";
import artist_endpoints from "../apis/rama-cms/endpoints/artist";
import jobs_endpoints from "../apis/rama-cms/endpoints/jobs";
import api from "../apis/rama-cms";
import HighlightArtists from '../components/HighLightArtists'
import ArtistJobs from '../components/ArtistJobs';
interface StaticProps {
    images: BannerImagem[]
    artists: Artist[]
    jobs: Job[]
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

interface Job {
    name: string
    youtube_link: string
    image :Media
    spotify_link: string
    description: string
}

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

export const getJobs = async () => {
    const endpoint = jobs_endpoints.graphql()
    const today = new Date().toISOString()
    const { data, ok } = await api.post<any>(endpoint, {
        query: `{
            jobs (
                limit: 6, 
                sort: "release_date:desc", 
                where: { 
                  release_date_lt : "${today}" 
                }) {
                  name,
                  youtube_link,
                  image{
                    url,
                  },
                  spotify_link,
                  description, 
                  release_date
              }
        }`
    })

    if (ok) {
        return data.data.jobs
    }
}

export const getArtists = async () => {
    const endpoint = artist_endpoints.graphql()
    const { data, ok } = await api.post<any>(endpoint, {
        query: `{
            artists (
                start:0,
                limit: 6,
                sort: "order"
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

export const getStaticProps: GetStaticProps = async () => {
    const images = await getBanners()
    const artists = await getArtists()
    const jobs = await getJobs()

    return {
        props: {
            images,
            artists, 
            jobs
        }
    }
}

const Home: React.FC<StaticProps> = ({ images, artists, jobs }) => {
  const jobsProps = { jobs, title : "Últimos Lançamentos", background: "black" }
  const artistsProps = { artists, title : "Artistas", background: "white" }

  return (
    <Container>
      <Head>
        <title>Rama Records - Principal</title>
      </Head>

      <DefaultPage>

        <Banner images={images} />

        <ArtistJobs {...jobsProps} />

        <HighlightArtists {...artistsProps} />

      </DefaultPage>
    </Container>
  )
}



export default Home

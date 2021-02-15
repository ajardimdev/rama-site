import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import Head from 'next/head'
import { Container} from '../../styles/pages/Home'
import Banner from '../../components/Banner'

import artist_endpoints from "../../apis/rama-cms/endpoints/artist";
import api from "../../apis/rama-cms";
import DefaultPage from '../../layouts/DefaultPage';
import { useRouter } from 'next/dist/client/router';
import Bio from '../../components/Bio';
import ArtistJobs from '../../components/ArtistJobs';

interface Artist {
    name: number,
    bio: string
    spotify_tracks: any[],
    banners: Media[],
    bio_image: Media,
    jobs: Job[]
}

interface Media {
    url: string,
}

interface StaticProps {
    artist: Artist
}

interface Job {
    name: string
    youtube_link: string
    image :Media
    spotify_link: string
    description: string
}


export const getArtists = async () => {
    const endpoint = artist_endpoints.graphql()
    const { data, ok } = await api.post<any>(endpoint, {
        query: `{
            artists  {
                slug
            }
        }`
    })

    if (ok) {
        return data.data.artists
    }
}

export const getArtist = async (slug) => {
    const endpoint = artist_endpoints.graphql()
    const { data, ok } = await api.post<any>(endpoint, {
        query: `{
            artists (
                limit:1, where:{ slug: "${slug}" }
             ) {
                name,
                bio,
                banners {
                    url
                },
                bio_image {
                    url
                },
                jobs {
                    name,
                    youtube_link,
                    image{
                      url,
                    },
                    spotify_link,
                    description
                }
            }
        }`
    })

    if (ok) {
        return data.data.artists
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const artists = await getArtists()
    const paths = artists.map(artist => {
        return { params: { slug: artist.slug } }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params
    const artists = await getArtist(slug)

    return {
        props: {
            artist: artists[0]
        }
    }
}


const Artist: React.FC<StaticProps> = ({ artist }) => {
    const { name, bio, banners, bio_image, jobs } = artist
    const { isFallback } = useRouter()

    if(isFallback) {
        return <p>Carregando...</p>
    }

    const images = banners.map(media => {
        return { media }
    })

    const bioProps = { name, bio, bio_image }
    const jobsProps = { jobs }

    return (
        <Container>
            <Head>
                <title>Rama Records - Principal</title>
            </Head>

            <DefaultPage>
                <Banner images={images} />

                <Bio {...bioProps} />
                <ArtistJobs {...jobsProps} />

            </DefaultPage>
        </Container>
    );
}

export default Artist;

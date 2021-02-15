import React from 'react';
import Head from 'next/head'
import { Container} from '../../styles/pages/ARama'
import DefaultPage from '../../layouts/DefaultPage'
import artist_endpoints from "../../apis/rama-cms/endpoints/artist";
import api from "../../apis/rama-cms";
import HighlightArtists from '../../components/HighLightArtists';
import { GetStaticProps } from 'next';

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
                bio,
            }
        }`
    })

    console.log(ok)
    if (ok) {
        console.log(data)
        return data.data.artists
    }
}

interface StaticProps {
    artists: Artist[]
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
    const artists = await getArtists()

    return {
        props: {
            artists
        }
    }
}

const Artistas: React.FC<StaticProps> = ({ artists }) => {
    return (
        <Container>
          <Head>
            <title>Rama Records - A Rama</title>
          </Head>

          <DefaultPage>

            <HighlightArtists artists={artists} />
          </DefaultPage>
        </Container>
      )
}



export default Artistas;

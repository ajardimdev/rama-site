import React from 'react';
import Head from 'next/head'
import { Container, FakeHeaderPadding} from '../../styles/pages/Artistas'
import DefaultPage from '../../layouts/DefaultPage'
import artist_endpoints from "../../apis/rama-cms/endpoints/artist";
import api from "../../apis/rama-cms";
import HighlightArtists from '../../components/HighLightArtists';
import { GetStaticProps } from 'next';

interface Metatag {
    tags: any
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
                bio,
            }
        }`
    })

    if (ok) {
        return data.data.artists
    }
}

export const getMetatags  = async () => {
    const endpoint = artist_endpoints.graphql()
    const { data, ok } = await api.post<any>(endpoint, {
        query: `{
            metatags (
               limit: 1,
               where: { 
                url : "/artistas" 
               }
            ) {
                tags
            }
        }`
    })

    if (ok) {

        return data.data.metatags
    }
}

interface StaticProps {
    artists: Artist[],
    metatags: Metatag
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
    const metatags = await getMetatags()
    
    return {
        props: {
            artists,
            metatags: metatags && metatags.length > 0 ? metatags[0] : { tags: {}}
        }
    }
}

const Artistas: React.FC<StaticProps> = ({ artists, metatags }) => {
    const artistsProps = { artists, title : "Artistas", background: "black" }
    const tagsKeys = Object.keys(metatags.tags)

    return (
        <Container>
          <Head>
            <title>Rama Records - Artistas</title>
            {tagsKeys.map((key, i) => (
                <meta key={i} property={key} content={metatags.tags[key]} />
            ))}
          </Head>

          <FakeHeaderPadding />

          <DefaultPage>
            <HighlightArtists {...artistsProps} />
          </DefaultPage>
        </Container>
      )
}



export default Artistas;

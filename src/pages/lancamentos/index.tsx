import React from 'react';
import Head from 'next/head'
import { Container} from '../../styles/pages/Lancamentos'
import DefaultPage from '../../layouts/DefaultPage'

import jobs_endpoints from "../../apis/rama-cms/endpoints/jobs"
import api from "../../apis/rama-cms"
import ArtistJobs from '../../components/ArtistJobs';
import { GetStaticProps } from 'next';
import { FakeHeaderPadding } from '../../styles/pages/Artistas';

interface StaticProps {
  jobs: Job[]
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

export const getJobs = async () => {
  const endpoint = jobs_endpoints.graphql()
  const today = new Date().toISOString()
  const { data, ok } = await api.post<any>(endpoint, {
      query: `{
          jobs (
              limit: 12, 
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


export const getStaticProps: GetStaticProps = async () => {
  const jobs = await getJobs()

  return {
      props: {
          jobs
      }
  }
}

const Lancamentos: React.FC<StaticProps> = ({ jobs }) => {
    const jobsProps = { jobs, title : "Lançamentos", background: "black" }

    return (
      <Container>
        <Head>
          <title>Rama Records - Lançamentos</title>
        </Head>

        <FakeHeaderPadding />

        <DefaultPage>
          <ArtistJobs {...jobsProps} />
        </DefaultPage>
    </Container>
      )
}

export default Lancamentos;

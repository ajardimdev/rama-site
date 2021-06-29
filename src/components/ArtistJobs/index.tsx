import React, { useState } from 'react';
import Image from 'next/image'
import logo from '../../assets/logo_small.png'
import mark_white_top from '../../assets/mark-white-top.png'
import { base_url } from '../../apis/rama-cms/constants'
import { Container, ImageDiv, SpotifyPlayer, YouTubePlayer } from './styles'
interface ArtistJobsProps {
    jobs: Job[],
    title: string,
    background: string
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

const image_url = base_url

const ArtistJobs: React.FC<ArtistJobsProps> = ({ jobs, title, background }) => {
  const [open, setOpen] = useState(null)

  function openAlbum(e, index) {
    e.preventDefault()

    if(index === open) {
        setOpen(null)
        return;
    }

    setOpen(index)
  }

  return (
    <Container background={background}>
        <img className="mark_top_white" src={mark_white_top} alt="" />

        <div className="title-area">
            <img src={logo} alt="Rama" />
            <h2>{title ?? "Lançamentos"}</h2>
        </div>

        <div className="carousel-area">
            {jobs.map((job,index) => {
                    return (
                        <div key={index} className="album">
                            <a onClick={e => openAlbum(e, index)}>
                                <figure key={index} >
                                    <ImageDiv>
                                        <Image key={index} src={job.image.url} alt={job.name} width={300} height={300} layout="responsive"/>
                                    </ImageDiv>

                                    <figcaption>
                                        <div>
                                            <span>{job.name}</span>
                                            {job.description && (
                                                <p>{job.description.substring(0, 120)}{job.description.length > 119 && '...'}</p>
                                            )}
                                        </div>
                                    </figcaption>
                                </figure>
                            </a>


                            {open === index && (
                                <div className="album_content">
                                    <div className="title-area">
                                        <h3>{job.name}</h3>
                                    </div>
                                    <div className="album_content--in">
                                        <p>{job.description}</p>

                                        {job.spotify_link && (
                                            <SpotifyPlayer src={job.spotify_link} width="600" height="80" allowtransparency={true} allow="encrypted-media" />
                                        )}

                                        {job.youtube_link && (
                                            <YouTubePlayer width="600" height="400" src={job.youtube_link} frameborder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                    )
                })}
        </div>

    </Container>
  );
};

export default ArtistJobs;

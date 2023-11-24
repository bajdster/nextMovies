import React from 'react'
import Image from 'next/image'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faEye, faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

library.add(faStar, faEye, faFilm);


const getMovieDetail = async (id) =>
{
    const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTY0OTAxMDYxOWQ2MDc2ODYzYTY1Y2Q2YmExMDUwYSIsInN1YiI6IjY1NWU3NzBkODNlZTY3MDFmNWY1YWJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.84_BQfa8XBlVAV-_m2PQlM2WC_gcFhUOV7TyxzziuDk'
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`,
    {
        headers:{
            accept: 'application/json',
            Authorization: `Bearer ${bearerToken}`
        }
    })
    const data = await response.json()
    console.log(data)

    return data;
}

const MovieDetail = async ({params}) => {

    const movie = await getMovieDetail(params.id);

   const {title, homepage, overview, release_date, runtime, vote_average, vote_count, budget, original_language} = movie

   const rate = vote_average.toFixed(1)

  return (
    <main className='flex min-h-screen p-24 justify-between'>
        
        <div className='flex flex-col items-center w-1/4'>
            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={400} height={600}/>
        </div>
        <div className='w-1/5 flex flex-col p-12'>
            <span className='text-6xl flex items-center mb-2'>{rate} <FontAwesomeIcon icon="star" className='h-8 text-yellow-600'/></span>
            <span className='text-sm text-gray-700'>Vote count: {vote_count}</span>
            <span className='text-sm text-gray-700'>Release: {release_date}</span>
            <span className='text-sm text-gray-700'>Runtime: {runtime} min</span>
            <span className='text-sm text-gray-700'>Budget: {budget}</span>
            <span className='text-sm text-gray-700'>Language: {original_language}</span>
        </div>
        <div className='w-1/2 p-12'>
            <h1 className='text-6xl uppercase mb-10'>{title}</h1>
            <p className='text-justify mb-20'>{overview}</p>
            <span className='text-sm underline'><Link href={homepage}>{homepage}</Link></span>

            <p className='mt-6 bg-red-800 w-1/3 h-10 flex justify-center items-center rounded hover:bg-red-600 hover:text-black'>
                <Link href="/">{'<- Return to movies list'}</Link>
            </p>
        </div>


    </main>
  )
}

export default MovieDetail
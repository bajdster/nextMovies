import React from 'react'
import Link from 'next/link';
import MovieItem from './MovieItem';


const Movie = ({source, id, overview, title, voteStars, voteCount, poster}) => {

  return (
    <Link href={`/${id}`}>
        <div className='w-60 h-82 m-2 flex flex-col items-center'>

            <MovieItem poster={poster} title={title} voteCount={voteCount} voteStars={voteStars} overview={overview}/>
            
        </div>
    </Link>
  )
}

export default Movie
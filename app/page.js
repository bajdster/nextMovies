import Image from 'next/image';
import Movie from './components/Movie';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faEye, faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from './components/Pagination';

library.add(faStar, faEye, faFilm);

async function getData() {

  const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=41649010619d6076863a65cd6ba1050a');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();

  return data;
}

export default async function Home() {
  try {
    const movieData = await getData();

    return (
      <>
        <div>
          <Pagination/>
        </div>
        
        <main className="flex min-h-screen flex-wrap items-center justify-between p-24">

          {movieData.results.map((movie) => {
            return (<Movie id={movie.id} overview={movie.overview} title={movie.original_title} voteStars={movie.vote_average} voteCount={movie.vote_count} key={movie.id} poster={movie.poster_path}/>)
          })}
        </main>
      </>
    );
  } catch (error) {
    console.error('Error fetching movie data:', error);

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>Error fetching movie data</p>
      </main>
    );
  }
}
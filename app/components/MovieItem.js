'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useState } from 'react';

const MovieItem = ({ poster, title, voteCount, voteStars, overview }) => {

    const [showDetails, setShowDetails]= useState(false)

    const overViewWords = overview.split(" ").length
    const overViewCut = overViewWords > 50 ? overview.split(' ').slice(0, 50).join(' ') + "..." : overview;

    const onHoverHandler = () =>
    {
        setShowDetails(true);
    }

    const onLeaveHandler = () =>
    {
        setShowDetails(false)
    }



  return (
    <div
    className={`flex flex-col items-center ${
        showDetails ? 'flex-1  scale-150 z-50' : ''
    } transition-transform duration-300 ease-in-out relative`}
    onMouseEnter={onHoverHandler}
    onMouseLeave={onLeaveHandler}
    >
      
      <Image src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} width={200} height={400} />

        <div className={`${!showDetails ? 'flex w-full justify-between mb-5': 'hidden'}`}>
          <span className='h-1 w-1 text-slate-600 text-sm'>
            <FontAwesomeIcon icon={faEye} /> {voteCount}
          </span>

          <span className='h-1 w-1 text-slate-600'>
            <FontAwesomeIcon icon={faStar} /> {voteStars}
          </span>
        </div>
        <div className={`${!showDetails ? 'mt-5': 'hidden'}`}>
            <h2 className='text-center'>{title}</h2>
        </div>
        <div className={`${showDetails ? 'text-[9px] absolute bottom-0 p-1 pb-8 w-full h-full bg-black bg-opacity-75 flex flex-col justify-end': 'hidden'}`}>
            <h1 className='mb-2 font-bold'>{title}</h1>
            {overViewCut}
            
        </div>

    </div>
  );
};

export default MovieItem;

import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
  return (
    <div className='w-full h-20 flex justify-between items-center bg-red-800'>

            <h1 className='flex ml-5 font-bold'><FontAwesomeIcon icon="fa-solid fa-film" className='mr-3'/> Movie App</h1>
                
                <ul className='mr-5'> 
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                </ul>
    </div>
  )
}

export default Nav

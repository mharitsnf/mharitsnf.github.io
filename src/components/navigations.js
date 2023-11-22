import * as React from 'react'
import { Link, navigate } from 'gatsby'


export const NavLink = ({ target, children }) => {
  return (
    <Link className={`
      font-bold 
      text-sm xl:text-lg
      bg-harits-blue-2
      hover:bg-harits-blue-3
      transition-all duration-500
      rounded-full
      px-4 py-2
      xl:px-8 xl:py-3
      text-center
    `}
      to={target}
    >
      {children}
    </Link>
  )
}

export const BackLink = ({ children }) => {
  return (
    <button className='flex flex-wrap gap-2 content-center opacity-50' onClick={() => navigate(-1)}>{children}</button>
  )
}


export const NavLinkOut = ({ target, children }) => {
  return (
    <a className='
        text-sm md:text-md lg:text-lg xl:text-lg
        underline underline-offset-2'
      href={target} target="_blank" rel="noopener noreferrer"
    >
      <p>{children} ⭷</p>
    </a>
  )
}
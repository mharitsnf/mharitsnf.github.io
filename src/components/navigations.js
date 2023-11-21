import * as React from 'react'
import { Link, navigate } from 'gatsby'


export const NavLink = ({ target, isActive, children }) => {
  return (
    <Link className={`
      font-bold lg:text-lg
      bg-gradient-to-r from-harits-blue-2 to-harits-blue-3 
      rounded-full
      px-8 py-3
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
        text-sm md:text-md lg:text-lg
        underline underline-offset-2'
      href={target} target="_blank" rel="noopener noreferrer"
    >
      <p>{children} ⭷</p>
    </a>
  )
}
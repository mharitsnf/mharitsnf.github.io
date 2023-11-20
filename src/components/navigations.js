import * as React from 'react'
import { Link, navigate } from 'gatsby'


export const NavLink = ({ target, children }) => {
  return (
    <Link className='font-bold text-sm lg:text-lg' to={target}>{children}</Link>
  )
}

export const BackLink = ({ children }) => {
  return (
    <button className='flex flex-wrap gap-2 content-center' onClick={() => navigate(-1)}>{children}</button>
  )
}
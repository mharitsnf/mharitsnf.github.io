import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'


const NavLink = ({ target, children }) => {
  return (
    <Link className='font-bold' to={target}>{children}</Link>
  )
}


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className='container mx-auto py-16 px-12 lg:px-52'>
      
      <header className='pb-12 pt-12 lg:pt-32'>
        <h1 className='text-5xl lg:text-6xl pb-8 font-bold'>{data.site.siteMetadata.title}</h1>
        <nav className='flex gap-6 pt-8'>
          <NavLink target="/">Home</NavLink>
          <NavLink target="/about">About</NavLink>
          <NavLink target="/blog">Blog</NavLink>
        </nav>
      </header>

      <main>
        {pageTitle ? <h1>{pageTitle}</h1> : null}
        {children}
      </main>
    </div>
  )
}

export default Layout
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { NavLink, BackLink } from '../components/navigations'
import { DividerLg, PageTitle } from './content'


const BaseHeader = ({ children }) => {
  return (
    <header className='py-[4vh]'>
      {children}
    </header>
  )
}


const HeaderNormal = ({ data }) => {
  return (
    <BaseHeader>
      <PageTitle>{data.site.siteMetadata.title}</PageTitle>
      
      <DividerLg />

      <nav className='flex gap-[4vw]'>
        <NavLink target="/">Home</NavLink>
        <NavLink target="/blog">Blog</NavLink>
      </nav>

      <DividerLg />
    </BaseHeader>
  )
}

const HeaderBlog = ({ data }) => {
  return (
    <BaseHeader>

      <BackLink>
        <span className='text-xs lg:text-lg'>←</span>
        <p className='text-xs lg:text-lg'>Back</p>
      </BackLink>

      <DividerLg />

      <PageTitle>{data.mdx.frontmatter.title}</PageTitle>
      
      <DividerLg />

      <p className='italic text-xs lg:text-lg' >{data.mdx.frontmatter.date}</p>

      <DividerLg />

    </BaseHeader>
  )
}


const Headers = ({ mode, extData }) => {
  const defaultData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  switch (mode) {
    case 'NORMAL':
      return <HeaderNormal data={defaultData} />

    case 'CONTENT':
      return <HeaderBlog data={extData} />

    default:
      return <HeaderNormal data={defaultData} />
  }
}

export default Headers
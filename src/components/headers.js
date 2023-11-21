import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { NavLink, BackLink } from '../components/navigations'
import { DividerLg, DividerMd, PageTitle } from './content'


const BaseHeader = ({ children }) => {
  return (
    <header>
      <DividerLg />
      {children}
      <DividerLg />
    </header>
  )
}


const HeaderNormal = ({ data }) => {
  return (
    <BaseHeader>
      <PageTitle>{data.site.siteMetadata.title}</PageTitle>
      
      <DividerMd />

      <nav className='
        flex 
        flex-col lg:flex-row 
        gap-[4vw]'
      >
        <NavLink target="/">Home / Projects</NavLink>
        <NavLink isActive={true} target="/blog">Blog</NavLink>
      </nav>
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

      <DividerMd />

      <PageTitle>{data.mdx.frontmatter.title}</PageTitle>
      
      <DividerMd />

      <p className='font-bold text-xs lg:text-lg opacity-50' >{data.mdx.frontmatter.date}</p>
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
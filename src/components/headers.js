import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { BackLink } from '../components/navigations'
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
      
      {/* <DividerMd />

      <nav className='
        flex 
        flex-col xl:flex-row 
        gap-[4vw]'
      >
        <NavLink target="/">Home / Projects</NavLink>
      </nav> */}
      
    </BaseHeader>
  )
}

const HeaderBlog = ({ data }) => {
  return (
    <BaseHeader>
      <BackLink>
        <span className='text-xs xl:text-lg'>←</span>
        <p className='text-xs xl:text-lg'>Back</p>
      </BackLink>

      <DividerMd />

      <PageTitle>{data.mdx.frontmatter.title}</PageTitle>
      
      <DividerMd />

      <p className='font-bold text-xs xl:text-lg opacity-50' >{data.mdx.frontmatter.date}</p>
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
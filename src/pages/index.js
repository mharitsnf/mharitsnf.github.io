// Step 1: Import React
import * as React from 'react'
import PageContainer from '../components/layout'
import { Pg, ProjectSection, DividerLg, DividerMd } from '../components/content'
import Seo from '../components/seo'
import { useStaticQuery, graphql } from 'gatsby'
import { NavLinkOut } from '../components/navigations'

const IndexPage = ({ location }) => {
  const godotData = useStaticQuery(graphql`
    query {
      allMdx(
        sort: {frontmatter: {date: DESC}}
        filter: {internal: {contentFilePath: {regex: "/project/godot/"}}}
      ) {
        nodes {
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            slug
            thumbnail_image {
              childImageSharp {
                gatsbyImageData
              }
            }
            thumbnail_image_alt
          }
          id
        }
      }
    }
  `)

  return (
    <PageContainer>

      <Pg>I'm a software engineer passionate in 3D applications and game development, graphics programming, and interaction design. Currently based in Stockholm, Sweden.</Pg>
      <DividerMd />
      <Pg>You can find my past projects in this page, while in the blog page you will find my recent learnings and explorations.</Pg>
      <DividerMd />
      <ul className='flex flex-col lg:flex-row gap-2 lg:gap-6'>
        <li><NavLinkOut target='https://www.linkedin.com/in/mharitsnf/'>Linkedin</NavLinkOut></li>
        <li><NavLinkOut target='mailto:mharitsnf@gmail.com'>Email</NavLinkOut></li>
        <li><NavLinkOut target='https://medium.com/@mharitsnf'>Medium</NavLinkOut></li>
        <li><NavLinkOut target='https://github.com/mharitsnf/'>Github</NavLinkOut></li>
        <li><NavLinkOut target='https://arsith.itch.io/'>Itch.io</NavLinkOut></li>
      </ul>

      <DividerLg />

      <ProjectSection sectionTitle={"Godot Projects"} data={godotData} />

    </PageContainer>
  )
}


export const Head = () => <Seo />


export default IndexPage
// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { Pg, ProjectSection, DividerLg, DividerMd } from '../components/content'
import Seo from '../components/seo'
import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
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
    <Layout>

      <Pg>I'm a software engineer passionate in game and 3D application development, graphics programming, and interaction design. Currently based in Stockholm, Sweden.</Pg>
      <DividerMd />
      <Pg>Contact me at <span className='font-bold'>mharitsnf@gmail.com</span></Pg>

      <DividerLg />

      <ProjectSection sectionTitle={"Godot Projects"} data={godotData} />

    </Layout>
  )
}


export const Head = () => <Seo />


export default IndexPage
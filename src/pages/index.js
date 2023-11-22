// Step 1: Import React
import * as React from 'react'
import PageContainer from '../components/layout'
import { Pg, ProjectSection, DividerMd, Subtitle } from '../components/content'
import Seo from '../components/seo'
import { useStaticQuery, graphql } from 'gatsby'
import { NavLinkOut } from '../components/navigations'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      godot: allMdx(
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
      unity: allMdx(
        sort: {frontmatter: {date: DESC}}
        filter: {internal: {contentFilePath: {regex: "/project/unity/"}}}
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
      apps: allMdx(
        sort: {frontmatter: {date: DESC}}
        filter: {internal: {contentFilePath: {regex: "/project/apps/"}}}
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

      <Subtitle>About me</Subtitle>
      <Pg>I'm a software engineer passionate in 3D applications and game development, graphics programming, and interaction design. Currently based in Stockholm, Sweden.</Pg>
      <Pg>
        You can find my past projects in this page. I am also keeping a Notion page that contains a collection of blogs
        about my learning activities.
      </Pg>

      <DividerMd />

      <div className='flex flex-col md:flex-row xl:flex-row gap-[3vh] xl:gap-[0vh] justify-between'>
        <div>
          <Subtitle>Contacts</Subtitle>
          <ul className='flex flex-col md:flex-row xl:flex-row gap-2 xl:gap-6 pb-[3vh] xl:pb-[3vh]'>
            <li><NavLinkOut target='https://www.linkedin.com/in/mharitsnf/'>Linkedin</NavLinkOut></li>
            <li><NavLinkOut target='mailto:mharitsnf@gmail.com'>Email</NavLinkOut></li>
          </ul>
        </div>

        <div>
          <Subtitle>Links</Subtitle>
          <ul className='flex flex-col md:flex-row xl:flex-row gap-2 xl:gap-6 pb-[3vh] xl:pb-[3vh]'>
            <li><NavLinkOut target='https://mharitsnf.notion.site/Harits-Learning-Blog-7cebbfefc58d424dafb43a03f577358b?pvs=4'>Notion</NavLinkOut></li>
            <li><NavLinkOut target='https://medium.com/@mharitsnf'>Medium</NavLinkOut></li>
            <li><NavLinkOut target='https://github.com/mharitsnf/'>Github</NavLinkOut></li>
            <li><NavLinkOut target='https://arsith.itch.io/'>Itch.io</NavLinkOut></li>
          </ul>
        </div>
      </div>

      <DividerMd />

      <ProjectSection sectionTitle={"Unity Projects"} data={data.unity} />
      <ProjectSection sectionTitle={"Godot Projects"} data={data.godot} />
      <ProjectSection sectionTitle={"Other Software Engineering Projects"} data={data.apps} />

    </PageContainer>
  )
}


export const Head = () => <Seo />


export default IndexPage
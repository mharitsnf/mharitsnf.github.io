import * as React from 'react'
import { graphql } from 'gatsby'
import PageContainer from '../../components/layout'
import Seo from '../../components/seo'
import { BlogCard, Subtitle, Pg } from '../../components/content'


const BlogPage = ({ location, data }) => {
  return (
    <PageContainer>
      <Subtitle>Blogs</Subtitle>
      {
        data.allMdx.nodes.length === 0 ? <Pg className="opacity-50 italic">No content found.</Pg> : 
        data.allMdx.nodes.map((node) => (
          <BlogCard node={node} key={node.id} />
        ))
      }
    </PageContainer>
  )
}


export const query = graphql`
  query {
    allMdx(
      sort: {frontmatter: {date: DESC}}
      filter: {internal: {contentFilePath: {regex: "/blog/"}}}
    ) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM YYYY")
          title
          slug
          thumbnail_image_alt
          thumbnail_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
import * as React from 'react'
import { graphql } from 'gatsby'
import PageContainer from '../../components/layout'
import Seo from '../../components/seo'
import { BlogCard } from '../../components/content'


const BlogPage = ({ location, data }) => {
  return (
    <PageContainer>
      {
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
          hero_image_alt
          hero_image {
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
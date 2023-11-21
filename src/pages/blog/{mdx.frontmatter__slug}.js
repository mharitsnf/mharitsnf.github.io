import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PageContainer from '../../components/layout'
import MDXLayout from '../../components/mdx_components'
import { DividerLg } from '../../components/content'
import Seo from '../../components/seo'

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <PageContainer mode="CONTENT" extData={data}>

      {/* Hero img */}
      <GatsbyImage
        className='rounded-lg'
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />

      <DividerLg />

      <MDXLayout>
        {children}
      </MDXLayout>

    </PageContainer>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
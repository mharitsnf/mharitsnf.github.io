import * as React from 'react'
import { graphql } from 'gatsby'
import PageContainer from '../../components/layout'
import MDXLayout from '../../components/mdx_components'
import Seo from '../../components/seo'


const ProjectPost = ({ data, children }) => {

  return (
    <PageContainer mode="CONTENT" extData={data}>

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
        date(formatString: "MMMM YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default ProjectPost
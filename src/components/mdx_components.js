import * as React from 'react'
import { MDXProvider } from "@mdx-js/react"
import { Pg, Subtitle, DividerLg } from "./content"

const MDXPg = ({ children }) => {
  return <Pg className="pb-8">{ children }</Pg>
}

const MDXH2 = ({ children }) => {
  return <Subtitle className="pb-12">{children}</Subtitle>
}

const components = {
  p: MDXPg,
  h2: MDXH2,
  hr: DividerLg,
}

const MDXLayout = ({ children }) => {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  )
}

export default MDXLayout
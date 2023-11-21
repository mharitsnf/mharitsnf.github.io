import * as React from 'react'
import { MDXProvider } from "@mdx-js/react"
import { Pg, Subtitle, DividerMd, Li } from "./content"
import { NavLinkOut } from './navigations'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'

const MDXPg = ({ children }) => {
  return <Pg className="w-full">{ children }</Pg>
}

const MDXLi = ({ children }) => {
  return <Li className="w-full pl-2 lg:pl-4">{children}</Li>
}

const MDXOl = ({ children }) => {
  return (
    <ol className='list-decimal py-[2vh] pl-8 lg:pl-16'>
      {children}
    </ol>
  )
}

const MDXH2 = ({ children }) => {
  return <Subtitle className="w-full">{children}</Subtitle>
}

const Flex = ({ children, className }) => {
  return (
    <div className={`w-full flex flex-col lg:flex-row gap-4 pb-[2vh] lg:pb-[1.5vh] ${className}`}>
      {children}
    </div>
  )
}

const FlexMedia = ({ children, className }) => {
  return (
    <Flex className={`justify-evenly ${className}`}>
      {children}
    </Flex>
  )
}

const Img = ({ src, alt }) => {
  return (
    <div>
      <img className='rounded-lg' src={src} alt={alt} />
    </div>
  )
}

const Video = ({ src }) => {
  return (
    <div>
      <video className="rounded-lg" muted autoPlay loop>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}


const components = {
  p: MDXPg,
  h2: MDXH2,
  hr: DividerMd,
  li: MDXLi,
  ol: MDXOl,
  Flex,
  FlexMedia,
  NavLinkOut,
  StaticImage,
  GatsbyImage,
  Img,
  Video
}

const MDXLayout = ({ children }) => {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  )
}

export default MDXLayout
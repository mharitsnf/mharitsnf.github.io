import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


// TEXTS ==============================
export const PageTitle = ({ children }) => {
  return (
    <h1 className='font-bold text-4xl lg:text-6xl'>{children}</h1>
  )
}


const ProjectSectionTitle = ({ children }) => {
  return (
    <h2 className='font-bold text-xl lg:text-2xl text-white/50'>{children}</h2>
  )
}


// DIVIDERS ==============================
export const DividerLg = () => {
  return <div className='py-[2vh] lg:py-[4vh]'></div>
}


export const DividerMd = () => {
  return <div className='py-[1vh] lg:py-[2vh]'></div>
}


// CARDS ==============================
export const BlogCard = ({ node }) => {
  const image = getImage(node.frontmatter.hero_image)

  return (
    <Link className='flex flex-col lg:flex-row rounded-lg bg-slate-800 mb-8' to={`/blog/${node.frontmatter.slug}`}>
      
      <GatsbyImage
        className='w-auto lg:w-[10vw] lg:h-auto rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg'
        image={image}
        alt={node.frontmatter.hero_image_alt}
      />

      <div className='py-8 px-6 flex gap-4 flex-col justify-center'>
        <h2 className='font-bold text-md'>{node.frontmatter.title}</h2>
        <p className='italic text-sm'>{node.frontmatter.date}</p>
      </div>

    </Link>
  )
}


const ProjectCard = () => {
  return (
    <div className='w-auto h-[30vh] bg-slate-600 rounded-lg'>

    </div>
  )
}

// SECTIONS ==============================
export const ProjectSection = ({ sectionTitle }) => {
  return (
    <section>
      <DividerLg />
      
      <ProjectSectionTitle>{sectionTitle}</ProjectSectionTitle>
      
      <DividerMd />
      
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    
    </section>
  )
}
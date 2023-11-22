import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


// TEXTS ==============================
export const PageTitle = ({ children }) => {
  return (
    <h1 className='font-bold text-3xl xl:text-5xl'>{children}</h1>
  )
}


export const Subtitle = ({ children, className }) => {
  return (
    <h2 className={`font-bold text-lg xl:text-xl pb-[3vh] xl:pb-[3vh] ${className}`}>{children}</h2>
  )
}


export const Pg = ({ children, className }) => {
  return <p className={`xl:text-lg pb-[2vh] xl:pb-[1.5vh] ${className}`}>{children}</p>
}


export const Li = ({ children, className }) => {
  return <li className={`xl:text-lg pb-[2vh] xl:pb-[1.5vh] ${className}`}>{children}</li>
}


// DIVIDERS ==============================
export const DividerLg = () => {
  return <div className='py-[6vh] xl:py-[8vh]'></div>
}


export const DividerMd = () => {
  return <div className='py-[3vh] xl:py-[4vh]'></div>
}

// CARDS ==============================
export const BlogCard = ({ node }) => {
  const image = getImage(node.frontmatter.thumbnail_image)

  return (
    <Link className='
      flex 
      flex-col xl:flex-row 
      rounded-lg 
      bg-gradient-to-r from-harits-blue-2 to-harits-blue-3 
      mb-8
      transition duration-500
      shadow-md hover:shadow-lg 
      shadow-slate-900 hover:shadow-harits-blue-2 ' 
      to={`/blog/${node.frontmatter.slug}`}
    >

      {
        image ? <GatsbyImage
          className='w-auto xl:w-[10vw] xl:h-auto rounded-t-lg xl:rounded-tr-none xl:rounded-l-lg'
          image={image}
          alt={node.frontmatter.thumbnail_image_alt}
        /> : null
      }

      <div className='py-8 px-6 flex gap-4 flex-col justify-center'>
        <h2 className='font-bold text-md'>{node.frontmatter.title}</h2>
        <p className='italic text-sm'>{node.frontmatter.date}</p>
      </div>

    </Link>
  )
}


const ProjectCard = ({ node }) => {
  const image = getImage(node.frontmatter.thumbnail_image)

  return (
    <Link className='
      group relative
      transition duration-500
      w-auto h-[30vh] xl:h-[25vh] 
      rounded-lg' 
      to={`/project/${node.frontmatter.slug}`}
    >
      
      <GatsbyImage
        className='w-auto h-full rounded-lg'
        image={image}
        alt={node.frontmatter.thumbnail_image_alt}
      />
      
      <div className='
        group-hover:transition duration-500
        w-full h-full  
        absolute bottom-0 left-0 rounded-lg 
        bg-black/50 
        opacity-0 group-hover:opacity-100 
        flex flex-col justify-end'
      >
        <p className='text-center px-6 pb-6'>{node.frontmatter.title}</p>
      </div>

    </Link>
  )
}

// SECTIONS ==============================
export const ProjectSection = ({ sectionTitle, data }) => {
  return (
    <section>
      <Subtitle>{sectionTitle}</Subtitle>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
        {
          data.nodes.map(node => {
            return (
              <ProjectCard key={node.id} node={node}></ProjectCard>
            )
          })
        }
      </div>

      <DividerMd />
    </section>
  )
}
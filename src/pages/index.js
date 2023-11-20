// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { ProjectSection, DividerLg, DividerMd } from '../components/content'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      
      <p>I'm a software engineer passionate in game and 3D application development, graphics programming, and interaction design. Currently based in Stockholm, Sweden.</p>
      <DividerMd />
      <p>Contact me at <span className='font-bold'>mharitsnf@gmail.com</span></p>

      <DividerLg />

      <ProjectSection sectionTitle={"Unity Projects"} />
      <DividerMd />
      <ProjectSection sectionTitle={"Godot Projects"} />

    </Layout>
  )
}


export const Head = () => <Seo />


export default IndexPage
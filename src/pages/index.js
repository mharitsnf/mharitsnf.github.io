// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { Pg } from '../components/content'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      
      <Pg>I'm a software engineer passionate in game and 3D application development, graphics programming, and interaction design. Currently based in Stockholm, Sweden.</Pg>
      <Pg>Contact me at <span>mharitsnf@gmail.com</span></Pg>

      <section className='grid grid-cols-3 gap-4 py-8'>

        <div className='w-auto h-10 bg-white'></div>
        <div className='w-auto h-10 bg-white'></div>
        <div className='w-auto h-10 bg-white'></div>

      </section>

    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo />

// Step 3: Export your component
export default IndexPage
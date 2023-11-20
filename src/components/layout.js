import * as React from 'react'
import Headers from './headers'


const Layout = ({ pageTitle, mode, children, extData }) => {
  return (
    <div className='container mx-auto py-16 px-20 lg:px-52'>

      <Headers mode={mode} extData={extData} />

      <main>
        {pageTitle ? <h1>{pageTitle}</h1> : null}
        {children}
      </main>
    </div>
  )
}

export default Layout
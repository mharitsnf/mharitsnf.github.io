import * as React from 'react'
import Headers from './headers'


const PageContainer = ({ pageTitle, mode, children, extData }) => {
  return (
    <div className='container mx-auto py-16 px-16 lg:px-[20vw] lg:px-52'>

      <Headers mode={mode} extData={extData} />

      <main>
        {pageTitle ? <h1>{pageTitle}</h1> : null}
        {children}
      </main>
    </div>
  )
}

export default PageContainer
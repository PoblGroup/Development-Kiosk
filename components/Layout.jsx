import React from 'react'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div>
        <Head>
            <title>Pobl Developments</title>
        </Head>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout
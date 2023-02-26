import React from 'react'
import Footer from './Footer'
import GoTop from './GoTop'
import Header from './Header'
import Main from './Main'

export default function Layout({children}) {
  return (
    <>
        <Header />
        <Main>
            {children}
            <GoTop />
        </Main>
        <Footer/>
    </>
  )
}

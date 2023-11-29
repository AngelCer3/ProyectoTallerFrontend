import Footer from '@/pages/components/Footer'
import Header from '@/pages/components/Header'
import React from 'react'

export const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

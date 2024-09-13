import React from 'react'
import Notification from './components/Notification'
import Header from './components/Header'
import Hero_section from './components/Hero_section'
import ShowCase from './components/ShowCase'
import Feature from './components/Feature'
import Hero_Section2 from './components/Hero_Section2'
import Hero_Section3 from './components/Hero_Section3'
import Hero_Section4 from './components/Hero_Section4'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Notification/>
      <Header/>
      <hr />
      <Hero_section/>
      <ShowCase/>
      <Feature/>
      <Hero_Section2/>
      <Hero_Section3/>
      <Hero_Section4/>
      <Footer/>
    </div>
  )
}

export default App
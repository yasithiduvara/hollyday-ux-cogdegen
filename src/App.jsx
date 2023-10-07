import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Hottels from './components/Hottels'
import Search from './components/Search'
import CardOne from './components/CardOne'
import Commenets from './components/Commenets'
import About from './components/About'

const App = () => {
  return (
    <div>
     <Nav/>
     <Hero className=' bg-indigo-950'/>
     <Search />
     <CardOne />
     <Hottels />
     <Commenets />
     <About />
     {/* <ImageGalary/> */}
   
    <Footer />

    </div>
  )
}

export default App
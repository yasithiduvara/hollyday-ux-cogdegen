import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Hottels from './components/Hottels'
import Search from './components/Search'
import CardOne from './components/CardOne'
import Commenets from './components/Commenets'
import About from './components/About'
import ContactForm from './components/ContactForm '
import Map from './components/Map'

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
     <Map/>
     <ContactForm />
     {/* <ImageGalary/> */}
   
    <Footer />

    </div>
  )
}

export default App
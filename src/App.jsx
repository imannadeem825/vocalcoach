import Nav from './components/Nav'
import Home from './components/Home'
import Bio from './components/Bio'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Contact from './components/Contact'
import './App.css'
import Footer from './components/Footer'



function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Bio />
      <Testimonials />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
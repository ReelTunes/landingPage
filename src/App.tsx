import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'
import Footer from './components/footer/Footer'
function App() {

  return (
    <div className='app'>
      <Navbar></Navbar>

      <Hero></Hero>
      <Footer></Footer>
    </div>
  )
}

export default App
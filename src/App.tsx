import './App.css'
import reelTunesLogo from './assets/reeltunes.png'
import { Navbar } from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'
import Banner from './components/banner/Banner'
function App() {

  return (
    <div className='app'>
      <Navbar></Navbar>

      <Hero></Hero>
      <Banner></Banner>
    </div>
  )
}

export default App
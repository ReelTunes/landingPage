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
      <h1>ReelTunes</h1>
      <div className="mission">
        <h2>Our Mission:</h2>
        <p>ReelTunes boosts the visibility of independent artist by leveraging the power of content creators on instagram reels, creating a symbiotic ecosystem where each reel play translates into direct support for artists and earning for creators.</p>
      </div>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc4mOKJsH1GLfOabNdeQLK0toAeeSeLcBwx3QNp8YXtUIz1zA/viewform?embedded=true" width="640" height="480" frameBorder="0">Loading…</iframe>

    </div>
  )
}

export default App


import reelTunesLogo from './assets/ReelTunes2.png'
import './App.css'

function App() {

  return (
    <>
      <h1>ReelTunes</h1>
      <img className='logo' src={reelTunesLogo} />
      <div className="mission">
        <h2>Our Mission:</h2>
        <p>ReelTunes boosts the visibility of independent artist by leveraging the power of content creators on instagram reels, creating a symbiotic ecosystem where each reel play translates into direct support for artists and earning for creators.</p>
      </div>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc4mOKJsH1GLfOabNdeQLK0toAeeSeLcBwx3QNp8YXtUIz1zA/viewform?embedded=true" width="640" height="480" frameBorder="0">Loading…</iframe>

    </>
  )
}

export default App

import reelTunesLogo from '../../assets/reeltunes.png'
import './Navbar.css'
export const Navbar = () => {
    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <a href="">
                            <img src={reelTunesLogo} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h1 className='companyName'>ReelTunes</h1>
                        </a>
                    </li>
                    <li className='waitlist'>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4mOKJsH1GLfOabNdeQLK0toAeeSeLcBwx3QNp8YXtUIz1zA/viewform?embedded=true">
                            Join Waitlist
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
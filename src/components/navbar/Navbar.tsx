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
                        <a href="https://aaczpsc6koh.typeform.com/to/OnfHKZzS">
                            Join Waitlist
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
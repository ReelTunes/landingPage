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
                    <li className='contact'>
                        <a href="https://www.linkedin.com/company/reeltunes/">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
import './Banner.css'
import createxIcon from '../../assets/sd.png'
import gtIcon from '../../assets/gt3.png'
const Banner = () => {

    return(
        <div className="banner">
            <h3>Launched through Create-X Startup Launch 2024</h3>
            <img className='createx' src={createxIcon} alt="" />
            <img className='gt' src={gtIcon} alt="" />
        </div>
    )
}
export default Banner
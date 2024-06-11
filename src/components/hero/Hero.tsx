import './Hero.css'
export const Hero = () => {
    return(
        <div className="hero">
            <div className="title">
                <h1>Reach New Audiences</h1>
            </div>
            <div className="border">
                <div className="subtitle">
                    <h2>Use creators' audiences to expand your own!
                    </h2>
                </div>
                <div className="waitlist">
                    <a className='herowaitlist' href="https://docs.google.com/forms/d/e/1FAIpQLSc4mOKJsH1GLfOabNdeQLK0toAeeSeLcBwx3QNp8YXtUIz1zA/viewform?embedded=true">
                        Join Waitlist
                    </a>
                </div>
            </div>
        </div>
    )
}
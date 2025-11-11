import Profilepic from './assets/me1.jpg'

function Hero(){
    return(
        <div className="hero">
            <img src={Profilepic} alt="Emmanuel Twinomujuni" />
            <h2>Emmanuel Twinomujuni</h2>
            <p>Computer Science Student | Full-Stack Developer | Blockchain Enthusiast</p>
            <div className='buttons'>
                <a href="#projects" className="btn">View Projects</a>
                <a href="/resume.pdf" download className="btn">📩 Download Resume</a>
                <a href="#contact" className="btn">Contact Me</a>
            </div>
        </div>
    );
}
export default Hero;
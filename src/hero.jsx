import Profilepic from './assets/me1.png'

function Hero(){
    return(
        <div className="hero">
            
            <img src={Profilepic}></img>
            <h2>Emmanuel Twinomujuni</h2>
            <p>Computer Science Student | Full-Stack Developer | Blockchain Ethusiast</p>
            <div className='buttons'>
                <button> View Projects </button>
                <button> 📩Download Resume </button>
                <button> Contact Me </button>
            </div>
        </div>
    );
}
export default Hero;
import './index.css';
import Jf from './assets/JF.jpg';
import Afro from './assets/afro.png';
import Logo from './assets/shoplogo.png';

function Footer() {
    return (
        <footer className='footer'>
            <div className="sponsors">
                <h3>Our Sponsors</h3>
                <img src={Jf} alt="Jumia Force Logo" className="sponsor-logo" />
                <img src={Afro} alt="AfroVisuals Logo" className="sponsor-logo" />
                <img src={Logo} alt="Shop Logo" className="sponsor-logo" />

            </div>
            <p>&copy; 2026 TwinoDev. All rights reserved.</p>
        </footer>
    );
}
export default Footer;
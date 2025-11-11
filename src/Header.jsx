import Logo from './assets/logo.png';

function Header() {
    const shopname = "TwinoDev";
    const tagline = "Real Time Solutions To Real Life Problems";
  return (
    <>
    <header className='header'>
        <img src={Logo} alt="Logo" className="logo" />
        <div className="shop-info">
            <h1 className="shop-name">{shopname}</h1>
            <p className="tagline">{tagline}</p>
        </div>
        <div className="menu">
            <ul className="options">
                <a href="public/index.html">Home</a>
                <a href="#">Products</a>
                <a href="#">About</a>
                <a href="#">Contacts</a>
            </ul>
        </div>
    
    </header>
    </>
    
  );
}
export default Header;
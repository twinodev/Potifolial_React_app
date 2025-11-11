import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Hero from './hero.jsx'
import About from './about.jsx'
import Skills from './skills.jsx'
import Projects from './projects.jsx'
import Contact from './contact.jsx'


function Me() {

  return(
    <>
    <Header/>
    <Hero/>
    <About/>
    <div className='mid'>
      <Skills/>
      <Projects/>
    </div>
    <Contact/>
    <Footer/>
    </>
  );
  
}

export default Me;

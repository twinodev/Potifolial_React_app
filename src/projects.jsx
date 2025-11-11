 import Project from './project.jsx'
 import Cover from './assets/me.png'

 function Projects(){
    return(
        <div className="projects">
            <h2>My Projects</h2>
            <Project name="Project name" cover={Cover} description="A mathematical calculating game to Train your brain" git="#" live="#j"/>
            <Project name="Project name" cover={Cover} description="A mathematical calculating game to Train your brain" git="#" live="#j"/>
            <Project name="Project name" cover={Cover} description="A mathematical calculating game to Train your brain" git="#" live="#j"/>
        </div>
    );
 }
 export default Projects
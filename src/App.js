import logo from './logo.svg';
import './App.css';
import {Box, Grid, container} from "@mui/material";

function App() {
  return (

    <div className="main">
      <div className="top">
        <div className='top-img'>
        <img src={require("./mem.png")} className="t-img"/>
        </div>
        <div className="nav">
        <div className="menu">
        <div className="top-item">About</div>
          <div className="top-item">Projects</div>
          <div className="top-item">Contact</div>
        </div>
        </div>
      </div>

      <div className="body">
          <div className="first">
            <div className="welcom">
            <b>Welcome to</b> <br /> <span className="name">Sweet Lamb's Portfolio</span><br /> I am a software developer with a keen interest in systems programming with a new found passion of user interfaces and user experience. 
            </div>
            <div className="photo">
            <img src={require("./mem2.png")} className="mem2"/>
            </div>
          </div>

          <div className="projects">
          <div className="project-head"><b>Projects</b></div>
          <Box>
            <Grid container display={'flex'} justifyContent={'space-between'}>
            <Box className="box1">
            <Box width={450} borderRadius={10} component={'img'} src={require("./per2.png")} alt={'mockup'}/>
            <h1 style={{fontSize: '2rem', color: 'purple'}}>Personas</h1>
            </Box>
            <Box className="box1">
            <Box width={450} borderRadius={10} component={'img'} src={require("./responsive.png")} alt={'mockup'}/>
            <h1 style={{fontSize: '2rem', color: 'purple'}}>Responsive-Redesign</h1>
            </Box>
            <Box className="box1">
            <Box width={450} borderRadius={10} component={'img'} src={require("./iterative.png")} alt={'mockup'}/>
            <h1 style={{fontSize: '2rem', color: 'purple'}}>Iterative-Design</h1>
            </Box>
            <Box className="box1">
            <Box width={450} borderRadius={10} component={'img'} src={require("./develop.png")} alt={'mockup'}/>
            <h1 style={{fontSize: '2rem', color: 'purple'}}>Development</h1>
            </Box>
            </Grid>
          </Box>
          </div>
      </div>
    </div>
      

  );
}

export default App;

import React from 'react';
import { Box, Button, Collapse, Container, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import sample1 from "../assets/Sample1.webp";
import sample2 from "../assets/sample2.jpg";
import sample3 from "../assets/sample3.jpg";
import sample4 from "../assets/sample4.png";
import useWindowDimensions from "../Hooks/GetWindowDimensions";
import SimpleColapse from "../Components/SimpleColapse";
import BasicAppBar from "../Components/BasicAppBar";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';


import { useNavigate } from "react-router-dom";


import "./Home.css";
function Home(props) {
    
    const { height, width } = useWindowDimensions();
    const [checked, setChecked] = React.useState(false);
    const navigate = useNavigate();
  
    return (
       <>
       <BasicAppBar></BasicAppBar>
       <img style={{width :width,display:"block",left:0}} src={sample2}/>
       <div className='Blackbox' style={{width: width}}>
        <div className='BlackboxItem'>
            <h1>
            CERTIFICADOS
            </h1>
            <h2>
            Avalados por AIEP
            </h2>
        </div>

        <div className='BlackboxItem'>
            <h1>
            +650.000
            </h1>
            <h2>
            Alumnos
            </h2>
        </div>

        <div className='BlackboxItem'>
            <h1>
            ILIMITADOS
            </h1>
            <h2>
            Acceso a los certificados de por vida
            </h2>
        </div>
       </div>

       <div className="Whitebox" style={{width: width}}>

       <SimpleColapse></SimpleColapse>
       </div>

       <div className="WhiteboxWithItems" style={{width: width}}>

        <h2>Conecta con nosotros</h2>
        <div>
            <FacebookIcon fontSize='large'style={{padding:"0.5rem"}}></FacebookIcon>
            <InstagramIcon fontSize='large' style={{padding:"0.5rem"}}></InstagramIcon>
            <YouTubeIcon fontSize='large'style={{padding:"0.5rem"}}></YouTubeIcon>

        </div>

        <iframe src="https://player.vimeo.com/video/1054516508?h=14953d54b8" width="800" height="600" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
       </div>
       </>
            
          
      
    );
}

export default Home;
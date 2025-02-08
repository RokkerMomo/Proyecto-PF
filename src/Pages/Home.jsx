import React from 'react';
import { Box, Button, Collapse, Container, Divider, Input, Typography } from '@mui/material';
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
import "./Home.css";
import AutoPlay from '../Components/Autoplay';




function Home(props) {
    
    const { height, width } = useWindowDimensions();
    const [checked, setChecked] = React.useState(false);


    return (
        <>
        <meta name="viewport" content={width} />
        {/* NAVBAR */}
        <BasicAppBar></BasicAppBar>

        {/* IMAGEN */}
        <img className='Img' src={sample2}/>
        
        {/* Carrousel */}
        <div className='Carrousel'>
        <h2 style={{fontWeight:"bold",color:"white"}}>Nuestros Cursos</h2>
            <AutoPlay></AutoPlay>
        </div>

        {/* About us */}
        <SimpleColapse></SimpleColapse>


        {/* Whitebox */}
        <div className="WhiteboxWithItems" >

        {/* Conect with us */}
        <h2>Conecta con nosotros</h2>
        <div>
             <FacebookIcon fontSize='large'style={{padding:"0.5rem"}}></FacebookIcon>
             <InstagramIcon fontSize='large' style={{padding:"0.5rem"}}></InstagramIcon>
             <YouTubeIcon fontSize='large'style={{padding:"0.5rem"}}></YouTubeIcon>

         </div>
      
        </div>
        
        </>

    );
}

export default Home;
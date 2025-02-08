import React from 'react';
import AutoPlay from '../Components/Autoplay';
import { Button } from '@mui/material';

function Test(props) {
    return (
        <div style={{backgroundColor:"red",display:"flex",justifyContent:"center",flex:1,flexDirection:"column",justifyItems:"center",alignContent:"center",padding:50}}>
            <AutoPlay></AutoPlay>
        </div>
        
    );
}

export default Test;
import * as React from 'react';
import './index.css';
import { Typography } from '@mui/material';

export default function Current() {
    return (
        <div>
            <Typography component={'div'} variant="b1" align="left" color="text.secondary" style={{paddingLeft: 210, width: 975}} paragraph>
                <p>I'm currently moving to Mountain View before I start work at Google/Youtube. Going from Palm Desert and San Diego is a 
                decent size trip and I'm arranging my stuff to be moved. Excited to experience a new city and start work at such
                a great company!</p>
            </Typography>
            <div className="media">
                <img src="https://dh-prod-cdn.azureedge.net/-/media/property/jdv/avante/downtown-mountain-view-crpd1400x500.jpg?ts=8e91427c-9122-40bc-9fda-c5a32e074a85"
                width="840" height="300" 
                alt="Mountain View"/>
            </div>
        </div>
    )
}
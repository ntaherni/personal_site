import * as React from 'react';
import './index.css';
import { Typography } from '@mui/material';
import resume from './Nicholas_Tahernia_Resume.pdf'

export default function Resume() {
    return(
        <div>
            <Typography component={'div'} variant="b1" align="left" color="text.secondary" style={{paddingLeft: 210, width: 975}} paragraph>
                <p>Here is my most up-to-date resume and information:</p>
                <br></br>
            </Typography>
            <div className="media">
            <iframe title="Resume" src={resume} width="600px" height="830px">
            </iframe>
            </div>
        </div>
    )
}
import * as React from 'react';
import './index.css';
import { Typography } from '@mui/material';

export function Header() {
    return (
      <Typography
        style={{padding: 20}}
        component="div"
        variant="h2"
        color="black"
        align="center"
        fontStyle="Roboto"
        >
        Nicholas Tahernia
      </Typography>
    )
}
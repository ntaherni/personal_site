import * as React from 'react';
import './index.css';
import { Typography } from '@mui/material';
import Media from './media';
import Pages from './tabs';

export function Header() {
    return (
    <div>
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
    <Media />
    <Pages />
  </div>)
}
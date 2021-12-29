import * as React from 'react';
import './index.css';
import { Typography } from '@mui/material';

export default function Projects() {
    return(
        <div>
            <Typography component={'div'} variant="b1" align="left" color="text.secondary" style={{paddingLeft: 210, width: 960}} paragraph>
                <a href="https://cse110-sp21-group5.github.io/cse110-sp21-group5/source/" target="_blank" rel="noopener noreferrer">
                    <img src="https://cse110-sp21-group5.github.io/cse110-sp21-group5/source/Logo.png" alt="Bullet Journal" align="right" width="100" height="100"/>
                </a>
                <p>The <a href="https://cse110-sp21-group5.github.io/cse110-sp21-group5/source/" target="_blank" rel="noopener noreferrer">Bullet Journal</a> project
                was made as part of my Software Engineering course during the Spring 2021 quarter at UCSD. I was a group co-lead and main architect on a team of 8 people,
                made up of designers, programmers, and researchers. I both designed and implemented a lot of the core architecture of the journal. Another main issue
                was trying to integrate all of the different programmers code together, which I also did a lot of the work on. The technologies we used were HTML, CSS,
                JavaScript, and IndexedDB. </p>
                <br></br>
                <a href="https://itch.io/jam/vgdc-spring-game-jam-2020/rate/625748" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.itch.zone/aW1nLzMzMzQ2MjAucG5n/315x250%23c/A6jZoW.png" alt="Fateful Night" align="right" width="100" height="100"/>
                </a>
                <p><a href="https://itch.io/jam/vgdc-spring-game-jam-2020/rate/625748" target="_blank" rel="noopener noreferrer">One Fateful Night in Quarantine</a> is
                a game I made when the pandemic initially started in April 2020. I made the game after playing a few story-heavy RPGMaker style games and was inspired
                to make a short one myself. It was made primarily in the engine Ren'Py using the engine language and Python. It was made over the course of a weekend for
                a game jam as part of the Video Game Development Club at UCSD. Assets were found on the internet and music was found online as well then added to the
                game to better tell the story.</p>
                <br></br>
                <a href="https://play.google.com/store/apps/details?id=com.BestTeamNA.MakeUpBreakUp&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer">
                    <img src="https://play-lh.googleusercontent.com/NVa9DToN-3ublfh3fFKr0isL46z26TDNJdZFjl7lSPfIJpOgsVY6Z1v1tGTqSoldP6N6=s360-rw" alt="Makeup Breakup" align="right" width="100" height="100"/>
                </a>
                <p><a href="https://play.google.com/store/apps/details?id=com.BestTeamNA.MakeUpBreakUp&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer">Makeup Breakup</a> is
                a fun platform game designed for mobile devices. It was made as part of the IGDA Global Game Jam in February 2020. The team was composed of 6 people, with 3 of us doing
                the programming on the game. I was mainly involved in core gameplay programming, with the aspects of tilt control physics and devices' internal gyroscope functionality 
                able to be developed in Unity using C#. </p>
            </Typography>
        </div>
    )
}
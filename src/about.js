import * as React from 'react';
import './index.css';
import { Typography } from '@mui/material';

export default function About() {
    return(
        <div>
            <Typography component={'div'} variant="b1" align="left" color="text.secondary" style={{paddingLeft: 210, width: 975}} paragraph>
                <p>Hello, My name is Nicholas (Nico) Tahernia. I'm from Palm Desert, California where I grew up for the majority of my life.
                I currently have a Bachelor of Science degree in Mathematics - Computer Science from the University of California, San Diego (UCSD).</p>
                <p>My previous experiences include an internship at <a href="https://www.daybreakgames.com/home" target="_blank" rel="noopener noreferrer">
                Daybreak Game Company</a> where I was an Automation Engineer and a Test Engineer, an internship at <a href="https://www.peraton.com/ready/"
                target="_blank" rel="noopener noreferrer">Perspecta</a> where I was a member of the Innovation Team, and an internship at <a href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">
                Amazon</a> as a Software Development Engineer Intern.</p>
                <p>My current job is as a Software Engineer at <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Google</a> under 
                the <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a> organization. Aside from work,
                I'm passionate about game development, sports, software engineering, gaming, reading, and music.</p>
                <p>Feel free to contact me through any of my social media if you ever want to have a conversation, have a question about
                my experience or education, or just want to say hi!</p>
            </Typography>
            <div className="media">
                <a href="https://www.linkedin.com/in/nicholas-tahernia/" target="_blank" rel="noopener noreferrer">
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQHcyfpHfXl-GA/profile-displayphoto-shrink_400_400/0/1616312814349?e=1645660800&v=beta&t=yu9rhmLFyj1Cgyuz0luHZOa-3oKTVJRcvClEfV69GxA" 
                    alt="Self-Portrait"/>
                </a>
            </div>
        </div>
    )
}
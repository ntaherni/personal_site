import * as React from 'react';
import './index.css';
import { Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Experience() {
    return(
        <div>
            <Typography component={'div'} variant="b1" align="left" color="text.secondary" style={{paddingLeft: 210, width: 975}} paragraph>
                <p>I went to college at the <a href="https://ucsd.edu/" target="_blank" rel="noopener noreferrer">University of California, San Diego (UCSD)</a>. 
                I was a major in Mathematics - Computer Science, and I received my Bachelor of Science degree after three years and one quarter. Some of the courses 
                relevant to software engineering that I took were: Advanced Data Structures, Design and Analysis of Algorithms, Software Engineering, Programming Languages: Principles and Paradigms, 
                Theory of Computability, Components and Design Techniques for Digital System &amp; Laboratory, Software Tools and Techniques, Operating Systems, 
                Enumerative Combinatorics.</p>
                <p>My freshman year summer of college I had an internship at <a href="https://www.daybreakgames.com/home" target="_blank" rel="noopener noreferrer">
                Daybreak Game Company</a> where I was an Automation Engineer and a Test Engineer. During this experience, I worked directly with
                the game engine and Google's testing framework, GTest, to write automated and unit tests for different containers in C++. I also helped
                with manual testing of video games and bug fixes.</p>
                <p>My sophomore year summer of college I had an internship at <a href="https://www.peraton.com/ready/"target="_blank" rel="noopener noreferrer">Perspecta</a> where 
                I was a member of the Innovation Team. On this team, I was involved in building proof-of-concepts of various ideas that the
                team had and also contributing to the ideas. The main project I worked on was building the foundation of a chatbot using
                AWS Connect, Lex, and Lambda to both perform employee password resets or redirect them to information that they needed
                using speech recognition and voice commands. I accomplished this through Python and AWS.</p>
                <p>My junior year summer of college I had an internship at <a href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">Amazon</a> as 
                a Software Development Engineer Intern. I was on a team that dealt with advertisements and internal tools, and my project was to connect an 
                API to a GUI interface utilizing TypeScript and Java along with AWS.</p>
                <p>My current job is as a Software Engineer at <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Google</a> under 
                the <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a> organization.</p>
            </Typography>
        <div className="media">
            <ImageList sx={{ width: 900, height: 300 }} cols={4} rowHeight={30}>
                {itemData.map((item) => (
                <a href={item.href} target="_blank" rel="noopener noreferrer" key={item.title}>
                <ImageListItem key={item.img}>
                    <img
                    src={`${item.img}?w=350&h=200&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=350&h=200&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    gap="10"
                    />
                </ImageListItem>
                </a>))}
            </ImageList>
        </div>
    </div>
    )
}

const itemData = [
    {
        img: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Daybreak_Game_Company_logo.jpg',
        title: 'Daybreak Game Company',
        href: 'https://www.daybreakgames.com/home'
    },
    {
        img: 'https://cms.jibecdn.com/prod/perspecta/assets/OPENGRAPH-IMAGE-en-us-1592581242933.png',
        title: 'Perspecta',
        href: 'https://www.peraton.com/ready/'
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png',
        title: 'Amazon',
        href: 'https://www.amazon.com/'
    },
    {
        img: 'https://www.youtube.com/img/desktop/yt_1200.png',
        title: 'YouTube',
        href: 'https://www.youtube.com/',
    },
];
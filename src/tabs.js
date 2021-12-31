import * as React from 'react';
import './index.css';
import { Tab, Tabs
 } from '@mui/material';
import { TabContext, TabPanel 
 } from '@mui/lab';
import About from './about';
import Resume from './resume';
import Experience from './exp';
import Current from './current';
import Projects from './projects';
import Hobbies from './hobbies';

export default function Pages() {

    const [value, setValue] = React.useState('about');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="tabs"
                centered
                textColor="primary"
                indicatorColor="primary"
            >
            <Tab value="about" label="About Me"/>
            <Tab value="resume" label="Resume" />
            <Tab value="exp" label="Experience and Education" />
            <Tab value="proj" label="Projects" />
            <Tab value="hobbies" label="Hobbies and Interests" />
            <Tab value="current" label="What I'm Doing Now" />
            </Tabs>
            <TabPanel value="about">
                <About />
            </TabPanel>
            <TabPanel value="resume">
                <Resume />
            </TabPanel>
            <TabPanel value="exp">
                <Experience />
            </TabPanel>
            <TabPanel value="proj">
                <Projects />
            </TabPanel>
            <TabPanel value="hobbies">
                <Hobbies />
            </TabPanel>
            <TabPanel value="current">
                <Current />
            </TabPanel>
        </TabContext>
    )
}
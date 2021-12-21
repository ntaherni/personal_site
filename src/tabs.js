import * as React from 'react';
import './index.css';
import { Tab, Tabs
 } from '@mui/material';
import { TabContext, TabPanel 
 } from '@mui/lab';

export default function Pages() {

    const [value, setValue] = React.useState('one');

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
            <TabPanel value="about">About TBD</TabPanel>
            <TabPanel value="resume">Resume TBD</TabPanel>
            <TabPanel value="exp">Experience TBD</TabPanel>
            <TabPanel value="proj">Projects TBD</TabPanel>
            <TabPanel value="hobbies">Hobbies TBD</TabPanel>
            <TabPanel value="current">Current TBD</TabPanel>
        </TabContext>
    )
}
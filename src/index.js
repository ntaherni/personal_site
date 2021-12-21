import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from '@mui/material/Button';
import reportWebVitals from './reportWebVitals';

function App() {
  return (<Button variant="contained">Hello World</Button>);
}

ReactDOM.render(<App />, document.querySelector('#app'));

reportWebVitals();

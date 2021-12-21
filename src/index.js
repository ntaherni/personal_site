import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './header';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <Header />);
}

ReactDOM.render(<App />, document.querySelector('#app'));

reportWebVitals();

import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './header';
import Media from './media';
import Pages from './tabs';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div>
      <Header />
      <Media />
      <Pages />
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));

reportWebVitals();

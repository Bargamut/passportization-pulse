import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App/App';

import './style.css';
import { share2Socials } from "./scripts/socials";

ReactDOM.render(
  <App />,
  document.querySelector(`.app`)
);

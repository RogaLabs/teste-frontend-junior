import { render } from '~/App.js';
import styles from './index.css';

// document.adoptedStyleSheets = document.adoptedStyleSheets.concat(styles);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];

render(document.querySelector('#root'));

import { html } from '~/utils';

import { Card } from '~/components/card';
import { Player } from '~/components/player';

import albums from '../mocks/albums.json';

import './App.css';

export function App() {
  return html`
    <div class="App">
      <div class="container">${Card(albums)}</div>
      ${Player()}
    </div>
  `;
}

import { html, mounted } from '~/utils';
import './Header.css';

export function Header() {
  mounted(function () {
    const h1 = document.querySelector<HTMLHeadingElement>('.Header');

    h1?.addEventListener('click', function () {
      alert('Clicked');
    });
  });

  return html`<h1 class="Header">Music Player</h1>`;
}

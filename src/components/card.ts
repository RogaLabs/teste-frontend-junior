import { Tracks } from './tracks';

export function Card(albums: AlbumData[]) {
  return `
  ${albums
    .map((value) => {
      return `
        <div class="card">
          <div class="card-header">
            <img src=${value.cover} alt="avatar image" />
            <div class="card-content">
              <h1>
              ${value.title.replace(" ", "<br />")}
              </h1>
              <h2>${value.artist}</h2>
            </div>
          </div>
        ${Tracks(value.tracks)}
        </div>
      `;
    })
    .join('')}`;
}

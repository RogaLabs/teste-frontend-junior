export function Tracks(value: TrackData[]) {
  return `
  ${value
    .map((value, index) => {
      return `
        <div class="tracks">
          <h3>0${index + 1 + '.' + ' ' + value.title}</h3>
        </div>
      `;
    })
    .join('')}`;
}

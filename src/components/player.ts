export function Player() {
  return `
  <div class="play-container">
    <svg
      class="prev"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 18V6H8V18H6ZM9.5 12L18 6V18L9.5 12Z" fill="black" />
    </svg>
    <svg
      class="play"
      width="58"
      height="74"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 5.14001V19.14L19 12.14L8 5.14001Z" fill="black" />
    </svg>
    <svg
      class="next"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 18H18V6H16V18ZM6 18L14.5 12L6 6V18Z" fill="black" />
    </svg>
  </div>`;
}

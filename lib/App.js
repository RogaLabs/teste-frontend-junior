import styles from "./App.css";
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];
function render(root) {
  root.innerHTML = `
    <h1>Music Player!!</h1>
    <p>Render you app inside the root div.</p>
  `;
}
export {
  render
};

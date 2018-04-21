export default function printMe() {
  const elm = document.createElement('h1');
  elm.innerHTML = 'Hi!';
  document.body.appendChild(elm);
}
function changeColor() {
  const header = document.getElementById("header");
  const scrollingtext = document.getElementById("scrolling-text");
  const scrollingtexts = document.getElementById("scrolling-texts");
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  header.style.color = `rgb(${r}, ${g}, ${b})`;
  scrollingtext.style.color = `rgb(${r}, ${g}, ${b})`;
  scrollingtexts.style.color = `rgb(${r - 88}, ${g - 88}, ${b + 34})`;
}
setInterval(changeColor, 1000);

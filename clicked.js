function changeColor() {
    const header = document.getElementById("header");
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    header.style.color = `rgb(${r}, ${g}, ${b})`;
  }
  setInterval(changeColor, 1000);




function showAlert() {
  alert("product has been added to the cart!");
}

const button = document.getElementById("btn");
button.addEventListener("click", showAlert);



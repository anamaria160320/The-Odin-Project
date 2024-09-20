console.log("HEY");

function grid() {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  let Nrow = Number(prompt("Introdu nr de linii"));
  let Ncol = Number(prompt("Introdu numarul de coloane"));

  if (Nrow > 100 || Ncol > 100 || Nrow < 1 || Ncol < 1) {
    alert("Numar invalid , selectati un numar intre 1 - 99");
    return "ERROR";
  }
  if (!Number.isInteger(Nrow) || !Number.isInteger(Ncol)) {
    alert("Nu ati introdus un numar valid");
    return "ERROR";
  }

  for (let i = 0; i < Nrow; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < Ncol; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      const color = getRandomColor();
      square.style.backgroundColor = color;

      square.setAttribute("data-initial-color", color);
      square.setAttribute("data-hovers", 0);
      square.addEventListener("mouseover", darkenSquareonHover);

      row.appendChild(square);
      if (j != Ncol - 1) {
        square.classList.add("border-right-remover");
      }
    }
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${b}, ${b})`;
}

function darkenSquareonHover(event) {
  const square = event.target;
  let hovers = Number(square.getAttribute("data-hovers"), 10);

  if (hovers >= 10) return;

  hovers++;

  square.setAttribute("data-hovers", hovers);

  const initialColor = square.getAttribute("data-initial-color");
  const rgbValues = initialColor.match(/\d+/g).map(Number);
  const newColor = rgbValues.map((value) =>
    Math.floor(value * (1 - 0.1 * hovers))
  );
  square.style.backgroundColor = `rgb(${newColor[0]} , ${newColor[1]} , ${newColor[2]})`;
}

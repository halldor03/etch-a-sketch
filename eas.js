function gridDraw(gridSize) {
  for (let i = 0; i < gridSize ** 2; i++) {
    const content = document.querySelector("#content");
    const div = document.createElement("div");
    content.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    content.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
    div.classList.add("box");
    content.appendChild(div);
    div.addEventListener("mouseover", () => {
      let colors = [
        "red",
        "blue",
        "green",
        "pink",
        "yellow",
        "orange",
        "brown",
        "cyan",
        "magenta",
        "gold",
        "deepskyblue",
        "lawngreen",
        "mediumpurple",
      ];
      let newColor = colors[Math.floor(Math.random() * colors.length)];
      div.style.backgroundColor = newColor;
    });
  }
}
gridDraw(16);

const button = document.querySelector("#btn");
button.addEventListener("click", gridNew);

function gridNew() {
  const gridRemove = content.querySelectorAll(".box");
  gridRemove.forEach((element) => element.remove());
  gridSize = prompt("Select new grid size (2-85)");
  if (gridSize == null || gridSize === "") {
    alert("You cancelled the operation. Try again.");
    gridNew();
  } else if (gridSize > 85) {
    alert("Maybe try something smaller?");
    gridNew();
  } else if (gridSize < 2) {
    alert("Do you really want to create 1x1 grid? Try again");
    gridNew();
  } else if (gridSize >= 2 || gridSize <= 85) {
    gridDraw(gridSize);
  } else {
    alert("Must be a number between 2 and 85");
    gridNew();
  }
}

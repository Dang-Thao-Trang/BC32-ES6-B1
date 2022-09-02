// Dom
function dom(selector) {
  return document.querySelector(selector);
}
function domAll(selector) {
  return document.querySelectorAll(selector);
}

// mảng màu
const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

// hiển thị
let item = dom(".button-color");
const display = () => {
  let output = colorList.reduce((total, item, index) => {
    if (index === 0) {
      return total + `<button class="color-button ${item} active"></button>`;
    }
    return total + `<button class="color-button ${item}"></button>`;
  }, "");
  dom("#colorContainer").innerHTML = output;
};
display();

// phương trình load bảng màu
let colorEl = domAll(".color-button");
const colorBoard = () => {
  for (let i = 0; i < colorEl.length; i++) {
    colorEl[i].addEventListener("click", function () {
      changerColor(colorList[i], i);
    });
  }
};
colorBoard();

// thay đổi màu ngôi nhà
const changerColor = (color, index) => {
  colorBoardChanger(index);
  dom("#house").className = `house ${color}`;
};

// thay đổi hiệu ứng
const colorBoardChanger = (index) => {
  for (let i = 0; i < colorEl.length; i++) {
    colorEl[i].classList.remove("active");
  }
  colorEl[index].classList.add("active");
};

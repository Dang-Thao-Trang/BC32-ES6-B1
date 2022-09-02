// dom
function dom(selector) {
  return document.querySelector(selector);
}
const headingEl = dom(".heading");

// tạo hiệu ứng
const jumpAnimation = (...chars) => {
  return chars.reduce((result, item) => {
    return result + `<span>${item}</span>`;
  }, "");
};

// xuất hiệu ứng
dom(".heading").innerHTML = jumpAnimation(...headingEl.innerText);

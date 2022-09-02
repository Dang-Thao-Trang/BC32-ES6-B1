// dom
function dom(selector) {
  return document.querySelector(selector);
}

// khởi tạo
const calcInt = (...scores) => {
  return scores.reduce((result, value) => result + value, 0) / scores.length;
};

// Tính điểm khối lớp 1
dom("#btnKhoi1").addEventListener("click", function () {
  let math = +dom("#inpToan").value;
  let physics = +dom("#inpLy").value;
  let chemistry = +dom("#inpHoa").value;
  const int = calcInt(math, physics, chemistry);
  dom("#tbKhoi1").innerHTML = int;
});

// Tính điểm khối lớp 2
dom("#btnKhoi2").addEventListener("click", function () {
  let literature = +dom("#inpVan").value;
  let history = +dom("#inpSu").value;
  let geography = +dom("#inpDia").value;
  let english = +dom("#inpEnglish").value;
  const int = calcInt(literature, history, geography, english);
  dom("#tbKhoi2").innerHTML = int;
});

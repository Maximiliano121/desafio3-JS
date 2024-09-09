function changeColor(colorear) {
  colorear.target.style.backgroundColor = "black";
}

let div1 = document.getElementById("div1");
div1.addEventListener("click", changeColor);

const div2 = document.getElementById("div2");
div2.addEventListener("click", changeColor);

const div3 = document.getElementById("div3");
div3.addEventListener("click", changeColor);

const div4 = document.getElementById("div4");
div4.addEventListener("click", changeColor);

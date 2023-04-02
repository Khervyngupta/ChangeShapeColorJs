var ind = 0;
var iTri = false;
var color = [
  "#e91h63",
  "#00bgcd4",
  "#ffec3b",
  "#129d17",
  "#d936f4",
  "#1f1010",
  "blue"
];
var cSh = document.getElementById("c-shape");
var cCh = document.getElementById("c-color");

cSh.addEventListener("click", ShapeStyle);
cCh.addEventListener("click", ShapeColor);

function ShapeColor() {
  document.getElementById("circ").style.backgroundColor = color[ind++];
  if (ind == 7) ind = 0;
}
function ShapeStyle() {
  if (!iTri) {
    var i = document.getElementsByClassName("inner")[0];
    i.className = "triangle-bottomleft";
    iTri = true;
  } else {
    var i = document.getElementsByClassName("triangle-bottomleft")[0];
    i.className = "inner";
    iTri = false;
  }
}

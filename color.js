function randomColor() {

  var letters = "012346789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor((Math.random() * 16))];
  }

   return color;

}

function changeBackground() {
  document.body.style.backgroundColor = randomColor();
}

setInterval(changeBackground(),1000);
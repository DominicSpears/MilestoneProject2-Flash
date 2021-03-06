//function myFunction() {
//  document.body.style.backgroundColor = "red";
//}

function myFunction() {
  var list = document.getElementsByClassName("grid-container")[0];
  list.getElementsByClassName("grid-item")[0].style.backgroundColor = "lightblue";
}

/*var x = document.getElementById("grid-container");
var y = x.getElementsByClassName("grid-item");
var i;
for (i = 0; i < y.length; i++) {
  y[i].style.backgroundColor = "red";
}*/




/*const cards = document.querySelectorAll(".grid-item");


(function shuffle() {
    cards.forEach(card=> {
        let randomPos = math.floor(math.random() * 25);
        card.style.order = randomPos;
    });
})();*/

/*https://www.w3schools.com/jsref/met_document_queryselectorall.asp*/
function clickStart() {
    var x = document.querySelectorAll(".grid-item");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "lightblue";
    }
};

/*const cards = document.querySelectorAll(".grid-item");


(function shuffle() {
    cards.forEach(card=> {
        let randomPos = math.floor(math.random() * 25);
        card.style.order = randomPos;
    });
})();*/

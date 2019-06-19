var pointOne = document.querySelector("[id=product-1]");
var pointTwo = document.querySelector("[id=product-2]");
var pointThree = document.querySelector("[id=product-3]");


pointOne.addEventListener("click", function(evt) {
    document.body.style.background = "#849d8f";
});

pointTwo.addEventListener("click", function(evt) {
    document.body.style.background = "#8996a6";
});

pointThree.addEventListener("click", function(evt) {
    document.body.style.background = "#9d8b84";
});

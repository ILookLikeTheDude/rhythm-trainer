// Rhythm Selection
var tables = document.getElementsByTagName("td");
var toRandomize = [];
var rhythmSelect = [];
var x = document.getElementById("note-field");

$('td').click(function() {
    $(this).addClass('active');
    toRandomize += $(this).html();
});

//Randomize array order and limit to 4
//generate a random number then use that number to select toRandomize index
//use 4 selection iterations and push to new array
function makeRand() {
    var n = toRandomize.length;
    for (var i = 0; i < 4; i++) {
        var s = Math.floor(Math.random() * n);
        var node = document.createElement("DIV");
        var textNode = document.createTextNode(toRandomize[s]);
        node.appendChild(textNode);
        x.appendChild(node);
    }
};
//Print random order in divs (with button)
var set = document.getElementById("get-rhythm");
set.addEventListener("click", makeRand, false);

//Play rhythm audio


//Make another rhythm with selected notes


//Completely Reset Rhythms
var reset = document.getElementById("clear-button");
var clearAll = function() {
    $('td').removeClass('active');
    toRandomize = [];
    x.innerHTML = "";   
};
reset.addEventListener("click", clearAll, false);

function test() {
  alert("test");
}

var items = ["okay", '"shakes hand"', "reason", "why", "right", "all", "terms", "exploit", "this", "denoted", "so", "elements", "identity", "relation", "y", "x", '"walks on stairs"', "pair", '"break"', '"silence"', '"makes a joke"'];

function flip(toflip) {
  var elem = document.getElementById(toflip);
  console.log(toflip);
  if (elem.className == "box") {
    elem.className = "done";
  } else {
    elem.className = "box";
  }
}

function gen(x, y) {
  var main = document.getElementById("main");
  main.innerHTML = "";
  var neededitems = x*y;
  for (i=0; i<x; i++) {
    main.innerHTML = main.innerHTML + '<div class="row">';
    for (j=0; j<y; j++) {
      var rand = Math.floor(Math.random() * neededitems);
      main.innerHTML = main.innerHTML + '<div class="box" id="' + neededitems  + '" onclick="flip(' + neededitems + ')">' + items[rand] + '</div>';
      items.splice(rand, 1);
      neededitems -= 1;
    }
    main.innerHTML = main.innerHTML + '</div>';
  }
}

function test() {
  alert("test");
}

var nx;
var ny;
var items = ["okay", '"shakes hand"', "reason", "why", "right", "all", "terms", "exploit", "this", "denoted", "so", "elements", "identity", "relation", "y", "x", '"walks on stairs"', "pair", '"break"', '"silence"', '"makes a joke"'];
var isdone = []

function check() {
  for (i=0; i<nx; i++) {
    for (j=0;j<ny; j++) {
      if (isdone[i*nx+j] == false) {
        break;
      }
    }
    if (j==ny) {
      won();
      return 0;
    }
  }
  for (i=0; i<nx; i++) {
    for (j=0;j<ny; j++) {
      if (isdone[j*nx+i] == false) {
        break;
      }
    }
    if (j==nx) {
      won();
      return 0;
    }
  }
  for (i=0; i<nx; i++) {
    if (isdone[i*nx+i] == false) {
      break;
    }
  }
  if (i==nx) {
    won();
    return 0;
  }
  for (i=0; i<nx; i++) {
    if (isdone[(nx-1)+i*(nx-1)] == false) {
      break;
    }
  }
  if (i==nx) {
    won();
    return 0;
  }
  document.getElementById("header").innerHTML = "";
  return 0;
}

function won(){
  document.getElementById("header").innerHTML = "You won!";
  document.getElementById("body").style.background = "brown";
}

function flip(toflip) {
  var elem = document.getElementById(toflip);
  console.log(toflip);
  if (elem.className == "box") {
    elem.className = "done";
    isdone[toflip] = true;
  } else {
    elem.className = "box";
    isdone[toflip] = false;
  }
  check();
}

function gen(x, y) {

  nx = x;
  ny = y;

  for (i=0; i<x*y; i++) {
    isdone[i] = false;
  }

  var main = document.getElementById("main");
  main.innerHTML = "";
  var neededitems = x*y;
  for (i=0; i<x; i++) {
    main.innerHTML = main.innerHTML + '<div class="row">';
    for (j=0; j<y; j++) {
      var rand = Math.floor(Math.random() * neededitems);
      main.innerHTML = main.innerHTML + '<div class="box" id="' + (neededitems -1)  + '" onclick="flip(' + (neededitems-1) + ')">' + items[rand] + '</div>';
      items.splice(rand, 1);
      neededitems -= 1;
    }
    main.innerHTML = main.innerHTML + '</div>';
  }
}

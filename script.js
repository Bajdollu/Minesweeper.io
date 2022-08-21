var size = 5;
var Arr = []
function crField() {
  for (let z = 0; z < 100/size; z++) {
    for (let i = 0; i < 100/size; i++) {
      var divField = document.createElement("div");
      divField.setAttribute("Class", "fieldCard");
      divField.setAttribute("id", z+":"+i);
      divField.setAttribute("mine",false)
      document.getElementsByClassName("PlayingGround")[0].appendChild(divField);
    }
  }
  fieldLink();
}

function fieldLink() {
  var fieldsize = Math.sqrt(document.getElementsByClassName("fieldCard").length)
  Arr = new Array(fieldsize)
  for (var i = 0; i < Arr.length; i++) {
      Arr[i] = new Array(fieldsize);
    }

  var field = document.getElementsByClassName("fieldCard")
  var col = 0;
  var row = 0;

  for (let i = 0; i < field.length; i++) {
    Arr[row][col] = field[i].id
    if(col < fieldsize-1) {
        col++
    } else {
        col = 0;
        row++;
    }
  }
}

function crMines(num) {
  var fieldsize = Math.sqrt(document.getElementsByClassName("fieldCard").length)
  for (let i = 0; i < num; i++) {
    var ranCard = Arr[Math.floor(Math.random() * Math.sqrt(fieldsize))][Math.floor(Math.random() * Math.sqrt(fieldsize))]
    if(document.getElementById(ranCard).getAttribute("mine") == false) {
      document.getElementById(ranCard).setAttribute("mine", true);
    } else {
      console.log(ranCard + " is already a bomb.");
    }
  }
}

function showMines() {
  for (let i = 0; i < document.getElementsByClassName("fieldCard").length; i++) {
    if (document.getElementsByClassName("fieldCard")[i].getAttribute("mine")) {
      document.getElementsByClassName("fieldCard")[i].style.background = "red";
    }
  }
}

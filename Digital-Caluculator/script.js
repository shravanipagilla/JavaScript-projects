let buttons = document.getElementsByTagName("button");

let result = document.getElementById("result");

for (i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    let input = this.innerText;
    updateDisplay(input);
  };
}

function updateDisplay(input) {
  let currentDispaly = result.innerText;
  if (currentDispaly == "0") {
    if (input != "C" && input != "DEL" && input != "=") {
      result.innerText = "";
      result.innerText = input;
    }
  } else {
    if (input == "DEL") {
      result.innerText = currentDispaly.substring(0, currentDispaly.length - 1);
      if (result.innerText == "") {
        result.innerText = "0";
      }
    }
    if (input == "C") {
      result.innerText = "0";
    }
    if (input != "C" && input != "DEL" && input != "=") {
      result.innerText += input;
    }
    if (input == "=") {
      let display = result.innerText;
      result.innerText = eval(display);
    }
  }
}

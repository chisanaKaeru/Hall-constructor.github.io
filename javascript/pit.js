let pit = 0;

function addPit() {
  if (pit<=4) {
    pit++;
  let list_pit = document.getElementById("list_pit");
  let liPit = document.createElement("li");
  liPit.setAttribute("class", "list animate__animated animate__fadeInDown");

  let optionTextPlaceholdePit = document.createTextNode("Количество мест");
  let optionTextOnePit = document.createTextNode("Цех раздоя");
  let optionTextTwoPit = document.createTextNode("Цех производства молока");

  let selectPit = document.createElement("select");
  selectPit.setAttribute("class", "select_seat")
  selectPit.setAttribute("id", "option_pit" + pit);
  selectPit.setAttribute("onchange", "selectDataPit(this)");
  let optionPlaceholderPit = document.createElement("option");
  optionPlaceholderPit.setAttribute("disabled", "");
  optionPlaceholderPit.setAttribute("selected", "");
  optionPlaceholderPit.setAttribute("hidden", "");
  optionPlaceholderPit.appendChild(optionTextPlaceholdePit);
  let optionOneSidePit = document.createElement("option");
  optionOneSidePit.appendChild(optionTextOnePit);
  let optionTwoSidePit = document.createElement("option");
  optionTwoSidePit.appendChild(optionTextTwoPit);
  selectPit.append(optionPlaceholderPit,optionOneSidePit,optionTwoSidePit);

  let inputPit = document.createElement("input");
  inputPit.setAttribute("type", "number");
  inputPit.setAttribute("min", "1");
  inputPit.setAttribute("max", "60");
  inputPit.setAttribute("placeholder", "Кол-во мест");
  inputPit.setAttribute("id", "input_pit" + pit);
  inputPit.setAttribute("onchange", "inputDataPit(this)");

  liPit.append(selectPit,inputPit);
  list_pit.appendChild(liPit);
  }
  else{
    alert("Больше 5-и ям добавлять нельзя");
  }
}

function deletePit() {
  var lu = document.getElementById('list_pit');
  lu.removeChild(lu.lastChild);
  pit--;
  if (pit <= 0) {
    pit = 0;
  }
}

function selectDataPit(item) {
  let value = document.getElementById(item.id).value;
  localStorage.setItem(item.id, value);
}

function inputDataPit(item) {
  if (document.getElementById(item.id).value <= 0) {
    document.getElementById(item.id).value = 1;
    alert("Минимум можно 1-но место");
  } else {
    if (document.getElementById(item.id).value >= 60) {
      document.getElementById(item.id).value = 60;
      alert("Максим можно 60 мест");
    }
  }
  localStorage.setItem(item.id, item.value);
}
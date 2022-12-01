let pump = 0;

function addPump() {
  if (pump<=4) {
    pump++;
  let list_pump = document.getElementById("list_pump");
  let liPump = document.createElement("li");
  liPump.setAttribute("class", "list animate__animated animate__fadeInDown");

  let optionTextPlaceholdePump = document.createTextNode("Выберите мощность насоса");
  let optionTextOnePump = document.createTextNode("800 л/мин - 2,2 кВт");
  let optionTextTwoPump = document.createTextNode("1600 л/мин - 4 кВт");
  let optionTextThreePump = document.createTextNode("2100 л/мин - 5,5 кВт");
  let optionTextFourPump = document.createTextNode("2800 л/мин - 7,5 кВт");
  let optionTextFivePump = document.createTextNode("3300 л/мин - 7,5 кВт");
  let optionTextSixPump = document.createTextNode("4200 л/мин - 11 кВт");
  let optionTextSevenPump = document.createTextNode("6600 л/мин - 15 кВт");

  let selectPump = document.createElement("select");
  selectPump.setAttribute("class", "select_pump");
  selectPump.setAttribute("id", "option_pump" + pump);
  selectPump.setAttribute("onchange", "selectDataPump(this)");
  let optionPlaceholderPump = document.createElement("option");
  optionPlaceholderPump.setAttribute("disabled", "");
  optionPlaceholderPump.setAttribute("selected", "");
  optionPlaceholderPump.setAttribute("hidden", "");
  optionPlaceholderPump.appendChild(optionTextPlaceholdePump);
  let optionOneSidePump = document.createElement("option");
  optionOneSidePump.appendChild(optionTextOnePump);
  let optionTwoSidePump = document.createElement("option");
  optionTwoSidePump.appendChild(optionTextTwoPump);
  let optionThreeSidePump = document.createElement("option");
  optionThreeSidePump.appendChild(optionTextThreePump);
  let optionFourSidePump = document.createElement("option");
  optionFourSidePump.appendChild(optionTextFourPump);
  let optionFiveSidePump = document.createElement("option");
  optionFiveSidePump.appendChild(optionTextFivePump);
  let optionSixSidePump = document.createElement("option");
  optionSixSidePump.appendChild(optionTextSixPump);
  let optionSevenSidePump = document.createElement("option");
  optionSevenSidePump.appendChild(optionTextSevenPump);
  selectPump.append(optionPlaceholderPump,optionOneSidePump,optionTwoSidePump,optionThreeSidePump,optionFourSidePump,optionFiveSidePump,optionSixSidePump,optionSevenSidePump);

  liPump.append(selectPump);
  list_pump.appendChild(liPump);
  }
  else{
    alert("Больше 5-и насосов добавлять нельзя");
  }
}

function deletePump() {
  var lu = document.getElementById('list_pump');
  lu.removeChild(lu.lastChild);
  pump--;
  if (pump <= 0) {
    pump = 0;
  }
}

function selectDataPump(item) {
  let value = document.getElementById(item.id).value;
  localStorage.setItem(item.id, value);
}
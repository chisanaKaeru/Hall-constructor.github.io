let pump = 0;

function addPump() {
  if (pump<=4) {
    pump++;
    localStorage.setItem("pumpLi", pump);

    let list_pump = document.getElementById("list_pump");
    let li = document.createElement("li");
    li.setAttribute("class", "list animate__animated animate__fadeInDown");

    function box1(){
      let div = document.createElement("div");
      div.setAttribute("class", "box");

      let liText = document.createElement("h3");
      liText.setAttribute("class", "text-title");
      let h3 = document.createTextNode("Резервный");
      liText.appendChild(h3);

      let label = document.createElement("label");
      label.setAttribute("class", "switch");

      let input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("name", "washing-pad");
      input.setAttribute("id", "pad"+pump);
      input.setAttribute("onchange", "switchPump(this)");

      let span = document.createElement("span");
      span.setAttribute("class", "slider round");

      label.append(input, span);

      div.append(liText, label);
      return div;
    }

    function box2() {
      let div = document.createElement("div");
      div.setAttribute("class", "box");

      let liText = document.createElement("h3");
      liText.setAttribute("class", "text-title");
      let h3 = document.createTextNode("Мощность насоса");
      liText.appendChild(h3);

      let optionTextPlaceholde = document.createTextNode("Выберите из списка");
      let optionTextOne = document.createTextNode("800 л/мин - 2,2 кВт");
      let optionTextTwo = document.createTextNode("1600 л/мин - 4 кВт");
      let optionTextThree = document.createTextNode("2100 л/мин - 5,5 кВт");
      let optionTextFour = document.createTextNode("2800 л/мин - 7,5 кВт");
      let optionTextFive = document.createTextNode("3300 л/мин - 7,5 кВт");
      let optionTextSix = document.createTextNode("4200 л/мин - 11 кВт");
      let optionTextSeven = document.createTextNode("6600 л/мин - 15 кВт");

      let select = document.createElement("select");
      select.setAttribute("class", "select")
      select.setAttribute("id", "option-pump" + pump);
      select.setAttribute("onchange", "selectDataPump(this)");

      let optionPlaceholder = document.createElement("option");
      optionPlaceholder.setAttribute("disabled", "");
      optionPlaceholder.setAttribute("selected", "");
      optionPlaceholder.setAttribute("hidden", "");
      optionPlaceholder.appendChild(optionTextPlaceholde);

      let optionOne = document.createElement("option");
      optionOne.appendChild(optionTextOne);

      let optionTwo = document.createElement("option");
      optionTwo.appendChild(optionTextTwo);

      let optionThree = document.createElement("option");
      optionThree.appendChild(optionTextThree);

      let optionFour = document.createElement("option");
      optionFour.appendChild(optionTextFour);

      let optionFive = document.createElement("option");
      optionFive.appendChild(optionTextFive);

      let optionSix = document.createElement("option");
      optionSix.appendChild(optionTextSix);

      let optionSeven = document.createElement("option");
      optionSeven.appendChild(optionTextSeven);

      select.append(optionPlaceholder,optionOne,optionTwo,optionThree,optionFour,optionFive,optionSix,optionSeven);

      div.append(liText, select);
      return div;
    }

    li.append(box1(), box2());
    list_pump.appendChild(li);
  }
  else{
    alert("Больше 5-и насосов добавлять нельзя");
  }
}

function deletePump() {
  var lu = document.getElementById('list_pump');
  lu.removeChild(lu.lastChild);
  localStorage.removeItem("pad"+pump);
  localStorage.removeItem("textbox"+pump);
  pump--;
  localStorage.setItem("pumpLi", pump);
  if (pump <= 0) {
    pump = 0;
    localStorage.removeItem("pumpLi");
  }
}

function selectData(item) {
  let value = document.getElementById(item.id).value;
  localStorage.setItem(item.id, value);
}

function switchPump(object){
  if (object.checked) {
    localStorage.setItem(object.id, "Да");
  }
  else {
    localStorage.setItem(object.id, "Нет");
  }
}

function selectDataPump(object) {
  localStorage.setItem(object.id, object.value);
}

function setLiPump(){
  let number = localStorage.getItem("pumpLi");
  for (let index = 1; index <= number; index++) {
    addPump();
  }

  if (localStorage.getItem("pad1") == "Да") {
    document.getElementById("pad1").checked = true;
  }
  if (localStorage.getItem("pad2") == "Да") {
    document.getElementById("pad2").checked = true;
  }
  if (localStorage.getItem("pad3") == "Да") {
    document.getElementById("pad3").checked = true;
  }
  if (localStorage.getItem("pad4") == "Да") {
    document.getElementById("pad4").checked = true;
  }
  if (localStorage.getItem("pad5") == "Да") {
    document.getElementById("pad5").checked = true;
  }

  if (localStorage.getItem("option-pump1") != null) {
    document.getElementById("option-pump1").value = localStorage.getItem("option-pump1");
  }
  if (localStorage.getItem("option-pump2") != null) {
    document.getElementById("option-pump2").value = localStorage.getItem("option-pump2");
  }
  if (localStorage.getItem("option-pump3") != null) {
    document.getElementById("option-pump3").value = localStorage.getItem("option-pump3");
  }
  if (localStorage.getItem("option-pump4") != null) {
    document.getElementById("option-pump4").value = localStorage.getItem("option-pump4");
  }
  if (localStorage.getItem("option-pump5") != null) {
    document.getElementById("option-pump5").value = localStorage.getItem("option-pump5");
  }
}
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
      let h3 = document.createTextNode("Количество");
      liText.appendChild(h3);

      let input = document.createElement("input");
      input.setAttribute("type", "number");
      input.setAttribute("id", "textbox"+pump);
      input.setAttribute("onchange", "inputNumberPump(this)");

      div.append(liText, input);
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

function inputNumberPump(object) {
  if (object.value > 60) {
    object.value = 60;
  }
  else if (object.value < 1) {
    object.value = 1;
  }
  localStorage.setItem(object.id, object.value);
}

function setLiPump(){
  let number = localStorage.getItem("pumpLi");
  for (let index = 1; index <= number; index++) {
    addPump();
  }

  if (localStorage.getItem("pad1") != null) {
    document.getElementById("pad1").checked = true;
  }
  if (localStorage.getItem("pad2") != null) {
    document.getElementById("pad2").checked = true;
  }
  if (localStorage.getItem("pad3") != null) {
    document.getElementById("pad3").checked = true;
  }
  if (localStorage.getItem("pad4") != null) {
    document.getElementById("pad4").checked = true;
  }
  if (localStorage.getItem("pad5") != null) {
    document.getElementById("pad5").checked = true;
  }

  if (localStorage.getItem("textbox1") != null) {
    document.getElementById("textbox1").value = localStorage.getItem("textbox1");
  }
  if (localStorage.getItem("textbox2") != null) {
    document.getElementById("textbox2").value = localStorage.getItem("textbox2");
  }
  if (localStorage.getItem("textbox3") != null) {
    document.getElementById("textbox3").value = localStorage.getItem("textbox3");
  }
  if (localStorage.getItem("textbox4") != null) {
    document.getElementById("textbox4").value = localStorage.getItem("textbox4");
  }
  if (localStorage.getItem("textbox5") != null) {
    document.getElementById("textbox5").value = localStorage.getItem("textbox5");
  }
}
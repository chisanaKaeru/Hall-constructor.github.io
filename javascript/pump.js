let pump = 0;

function addPump() {
  if (pump<=4) {
    pump++;

    let list_pump = document.getElementById("list_pump");
    let li = document.createElement("li");
    li.setAttribute("class", "list animate__animated animate__fadeInDown");

    function box1(){
      let div = document.createElement("div");
      div.setAttribute("class", "box");

      let liText = document.createElement("h3");
      liText.setAttribute("class", "text-title");
      let h3 = document.createTextNode("Резвервный");
      liText.appendChild(h3);

      let label = document.createElement("label");
      label.setAttribute("class", "switch");

      let input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("name", "washing-pad");
      input.setAttribute("id", "pad"+pump);

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
  pump--;
  if (pump <= 0) {
    pump = 0;
  }
}

function selectData(item) {
  let value = document.getElementById(item.id).value;
  localStorage.setItem(item.id, value);
}
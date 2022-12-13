let pit = 0;

function addPit() {
  if (pit<=4) {
    pit++;
    let list_pit = document.getElementById("list_pit");
    let li = document.createElement("li");
    li.setAttribute("class", "list animate__animated animate__fadeInDown");

    function box1(){
      let optionTextPlaceholde = document.createTextNode("Количество мест");
      let optionTextOne = document.createTextNode("Цех раздоя");
      let optionTextTwo = document.createTextNode("Цех производства молока");

      let select = document.createElement("select");
      select.setAttribute("class", "select-seat")
      select.setAttribute("id", "option-pit" + pit);
      select.setAttribute("onchange", "selectDataPit(this)");

      let optionPlaceholder = document.createElement("option");
      optionPlaceholder.setAttribute("disabled", "");
      optionPlaceholder.setAttribute("selected", "");
      optionPlaceholder.setAttribute("hidden", "");
      optionPlaceholder.appendChild(optionTextPlaceholde);

      let optionOneSide = document.createElement("option");
      optionOneSide.appendChild(optionTextOne);

      let optionTwoSide = document.createElement("option");
      optionTwoSide.appendChild(optionTextTwo);

      select.append(optionPlaceholder,optionOneSide,optionTwoSide);
      return select;
    }

    function box2(){
      let input = document.createElement("input");
      input.setAttribute("type", "number");
      input.setAttribute("min", "1");
      input.setAttribute("max", "60");
      input.setAttribute("placeholder", "Кол-во мест");
      input.setAttribute("id", "input-pit" + pit);
      input.setAttribute("onchange", "inputDataPit(this)");
      return input;
    }

    li.append(box1(),box2());
    list_pit.appendChild(li);
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
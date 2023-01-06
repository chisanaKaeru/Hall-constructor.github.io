let pit = 0;

function addPit() {
  if (pit<=4) {
    pit++;
    localStorage.setItem("pitLi", pit);

    let list_pit = document.getElementById("list_pit");
    let li = document.createElement("li");
    li.setAttribute("class", "list animate__animated animate__fadeInDown");

    function box1(){
      let optionTextPlaceholde = document.createTextNode("Выберите цех");
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
      input.setAttribute("onchange", "inputNumberPit(this)");
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
  localStorage.removeItem("option-pit"+pit);
  localStorage.removeItem("input-pit"+pit);
  pit--;
  localStorage.setItem("pitLi", pit);
  if (pit <= 0) {
    pit = 0;
    localStorage.removeItem("pitLi");
  }
}

function selectDataPit(object) {
  localStorage.setItem(object.id, object.value);
}

function inputNumberPit(object) {
  if (object.value > 60) {
    object.value = 60;
  }
  else if (object.value < 1) {
    object.value = 1;
  }
  localStorage.setItem(object.id, object.value);
}

function setLiPit(){
  let number = localStorage.getItem("pitLi");
  for (let index = 1; index <= number; index++) {
    addPit();
  }

  if (localStorage.getItem("option-pit1") != null) {
    document.getElementById("option-pit1").value = localStorage.getItem("option-pit1");
  }
  if (localStorage.getItem("option-pit2") != null) {
    document.getElementById("option-pit2").value = localStorage.getItem("option-pit2");
  }
  if (localStorage.getItem("option-pit3") != null) {
    document.getElementById("option-pit3").value = localStorage.getItem("option-pit3");
  }
  if (localStorage.getItem("option-pit4") != null) {
    document.getElementById("option-pit4").value = localStorage.getItem("option-pit4");
  }
  if (localStorage.getItem("option-pit5") != null) {
    document.getElementById("option-pit5").value = localStorage.getItem("option-pit5");
  }

  if (localStorage.getItem("input-pit1") != null) {
    document.getElementById("input-pit1").value = localStorage.getItem("input-pit1");
  }
  if (localStorage.getItem("input-pit2") != null) {
    document.getElementById("input-pit2").value = localStorage.getItem("input-pit2");
  }
  if (localStorage.getItem("input-pit3") != null) {
    document.getElementById("input-pit3").value = localStorage.getItem("input-pit3");
  }
  if (localStorage.getItem("input-pit4") != null) {
    document.getElementById("input-pit4").value = localStorage.getItem("input-pit4");
  }
  if (localStorage.getItem("input-pit5") != null) {
    document.getElementById("input-pit5").value = localStorage.getItem("input-pit5");
  }
}
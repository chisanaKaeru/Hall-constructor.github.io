function toggleNav()  {
  document.body.classList.toggle("nav-open");
}

//input max 60
function inputNumber(object)  {
  if (object.value > 60)  {
    object.value = 60;
  }
  else if (object.value < 1)  {
    object.value = 1;
  }
  localStorage.setItem(object.id, object.value);
}

//select change img
function changePump()  {
  let object = document.getElementById("pump");
  localStorage.setItem(object.id, object.value);
  if (object.value == "Полиэфир")  {
    document.getElementById("img-pump").setAttribute("src", "image/vacuum-pump.jpg");
  } else if (object.value == "GEA")  {
    document.getElementById("img-pump").setAttribute("src", "http://www.rosphoto.com/images/u/articles/1510/7_5.jpg");
  } else if (object.value == "CTA") {
    document.getElementById("img-pump").setAttribute("src", "https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg");
  }
  localStorage.setItem(object.id, object.value);
}

//select change img
function changeIAAC()  {
  let object = document.getElementById("iaac");
  if (object.value == "Версия 1")  {
    document.getElementById("img-iaac").setAttribute("src", "image/vacuum-pump.jpg");
  } else if (object.value == "Версия 3")  {
    document.getElementById("img-iaac").setAttribute("src", "http://www.rosphoto.com/images/u/articles/1510/7_5.jpg");
  } else if (object.value == "Версия 2") {
    document.getElementById("img-iaac").setAttribute("src", "https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg");
  }
  localStorage.setItem(object.id, object.value);
}

function CheckboxButton(object) {
  if (object.checked == true)  {
    localStorage.setItem(object.id, object.value);
  } else  {
    localStorage.removeItem(object.id);
  }
}

function RadioButton(object) {
  localStorage.setItem(object.name, object.value);
  localStorage.setItem(object.name+"-id", object.id);
}

function divVerified() {
  let div = document.createElement("div");
  div.setAttribute("class", "verified");
  return div;
}

function setCheckedInputParlor() {
  if (localStorage.getItem("milking-parlor-id") != null)  {
    document.getElementById(localStorage.getItem("milking-parlor-id")).checked = true;
  }
}

function setDataPit() {
  if (localStorage.getItem("pit") != null)  {
    document.getElementById("pit").value = localStorage.getItem("pit");
  }
}

function setDataPump() {
  if (localStorage.getItem("pump") != null)  {
    document.getElementById("pump").value = localStorage.getItem("pump");
    changePump();
  }
}

function setCheckedInputPipeline() {
  if (localStorage.getItem("milk-pipeline-id") != null)  {
    document.getElementById(localStorage.getItem("milk-pipeline-id")).checked = true;
  }
}

function setCheckedInputSystem() {
  if (localStorage.getItem("milking-system-id") != null)  {
    document.getElementById(localStorage.getItem("milking-system-id")).checked = true;
  }
}

function setDataIAAC() {
  if (localStorage.getItem("iaac") != null)  {
    document.getElementById("iaac").value = localStorage.getItem("iaac");
    changeIAAC();
  }
  if (localStorage.getItem("iaac-input") != null)  {
    document.getElementById("iaac-input").value = localStorage.getItem("iaac-input");
  }
}

function setCheckedInputPart() {
  if (localStorage.getItem("hanging-part-id") != null)  {
    document.getElementById(localStorage.getItem("hanging-part-id")).checked = true;
  }
}

function setCheckedInputPad() {
  if (localStorage.getItem("washing-pad-id") != null)  {
    document.getElementById(localStorage.getItem("washing-pad-id")).checked = true;
  }
}

function setCheckedInpuEequipment() {
  if (localStorage.getItem("equipment1") != null)  {
    document.getElementById("equipment1").checked = true;
  }
  if (localStorage.getItem("equipment2") != null)  {
    document.getElementById("equipment2").checked = true;
  }
  if (localStorage.getItem("equipment3") != null)  {
    document.getElementById("equipment3").checked = true;
  }
  if (localStorage.getItem("equipment4") != null)  {
    document.getElementById("equipment4").checked = true;
  }
  if (localStorage.getItem("equipment5") != null)  {
    document.getElementById("equipment5").checked = true;
  }
}

function setCheckedPage() {
  if (localStorage.getItem("milking-parlor") != null)  {
    document.getElementById("page1").appendChild(divVerified());
  }
  if (localStorage.getItem("option-pit1") != null && localStorage.getItem("input-pit1") != null)  {
    document.getElementById("page2").appendChild(divVerified());
  }
  if ((localStorage.getItem("pump") != null) && (localStorage.getItem("textbox1") != null || localStorage.getItem("textbox2") != null || localStorage.getItem("textbox3") != null || localStorage.getItem("textbox4") != null || localStorage.getItem("textbox5") != null)) {
    document.getElementById("page3").appendChild(divVerified());
  }
  if (localStorage.getItem("milk-pipeline") != null)  {
    document.getElementById("page4").appendChild(divVerified());
  }
  if (localStorage.getItem("milking-system") != null)  {
    document.getElementById("page5").appendChild(divVerified());
  }
  if (localStorage.getItem("iaac") != null && localStorage.getItem("iaac-input") != null)  {
    document.getElementById("page6").appendChild(divVerified());
  }
  if (localStorage.getItem("hanging-part") != null)  {
    document.getElementById("page7").appendChild(divVerified());
  }
  if (localStorage.getItem("washing-pad") != null)  {
    document.getElementById("page8").appendChild(divVerified());
  }
  for (let index = 1; index < 6; index++)  {
    if (localStorage.getItem("equipment"+index) != null)  {
      document.getElementById("page9").appendChild(divVerified());
      break;
    }
  }
}

function verifyData(e) {
  if (localStorage.getItem("milking-parlor") == null) {
    e.preventDefault();
    alert('Вы ничего не выбрали в разделе "Доильный зал"');
  } else if (localStorage.getItem("option-pit1") == null && localStorage.getItem("input-pit1") == null) {
    e.preventDefault();
    alert('Вы ничего не добавили в разделе "Яма"');
  } else if (localStorage.getItem("textbox1") == null) {
    e.preventDefault();
    alert('Вы ничего не выбрали или не добавли в разделе "Вакуумный насосы"');
  } else if (localStorage.getItem("milk-pipeline") == null) {
    e.preventDefault();
    alert('Вы ничего не выбрали в разделе "Молокопровод"');
  } else if (localStorage.getItem("milking-system") == null) {
    e.preventDefault();
    alert('Вы ничего не выбрали в разделе "Система доения"');
  } else if (localStorage.getItem("iaac") == null && localStorage.getItem("iaac-input") == null) {
    e.preventDefault();
    alert('Вы ничего не выбрали в разделе "СИиА"');
  } else if (localStorage.getItem("hanging-part") == null) {
    e.preventDefault();
    alert('Вы ничего не выбрали в разделе "Подвисная часть"');
  } else if (localStorage.getItem("washing-pad") == null) {
    e.preventDefault();
    alert('Вы ничего не выбрали в разделе "Гигиена и содержание животных"');
  } else {
    let numberTrue = 0;
    for (let index = 1; index < 6; index++)  {
      if (localStorage.getItem("equipment"+index) == null)  {
        numberTrue++;
      }
    }
    if (numberTrue == 5) {
      e.preventDefault();
      alert('Вы ничего не выбрали в разделе "Дополнительное оборудование"');
    }
  }
}

function clearStorage() {
  localStorage.clear();
  location.reload();
}
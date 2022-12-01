//input max 60
function inputDataSystem(item) {
  var id = item.id
  if (document.getElementById(id).value <= 0) {
    document.getElementById(id).value = 1;
  } else {
    if (document.getElementById(id).value >= 60) {
      document.getElementById(id).value = 60;
    }
  }
  let valueSystem = document.getElementById(id).value;
  return valueSystem;
}

//select change img
function changePump() {
  let value = document.getElementById("pump").value;
  if (value == 1) {
    document.getElementById("img_pump").setAttribute("style", "background-image: url(image/vacuum-pump.jpg);");
  } else if (value == 2) {
    document.getElementById("img_pump").setAttribute("style", "background-image: url(image/vacuum-pump.jpg);");
  } else if (value == 3){
    document.getElementById("img_pump").setAttribute("style", "background-image: url(image/vacuum-pump.jpg);");
  }
}

//select change img
function changeWaterHeater() {
  let value = document.getElementById("water_heater").value;
  if (value == 1) {
    document.getElementById("img_water_heater").setAttribute("style", "background-image: url(https://www.travelwisconsin.com/uploads/blog/e2/e2ccbd6f-1070-4272-889b-cc7720bd664d-farm-scene-with-cows.jpg);");
  } else if (value == 2) {
    document.getElementById("img_water_heater").setAttribute("style", "background-image: url(http://www.rosphoto.com/images/u/articles/1510/7_5.jpg);");
  } else if (value == 3){
    document.getElementById("img_water_heater").setAttribute("style", "background-image: url(https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg);");
  }
}

//select change img
function changeCompressor() {
  let value = document.getElementById("compressor").value;
  if (value == 1) {
    document.getElementById("img_compressor").setAttribute("style", "background-image: url(https://www.travelwisconsin.com/uploads/blog/e2/e2ccbd6f-1070-4272-889b-cc7720bd664d-farm-scene-with-cows.jpg);");
  } else if (value == 2) {
    document.getElementById("img_compressor").setAttribute("style", "background-image: url(http://www.rosphoto.com/images/u/articles/1510/7_5.jpg);");
  }
}

//read data in localStorage
function getValueCheckbox(checkbox){
  if (checkbox.checked == true) {
    localStorage.setItem(checkbox.id, checkbox.value);
  } else {
    localStorage.removeItem(checkbox.id);
  }
}

function milking_parlor() {
  let value = document.querySelector('input[name="milking-parlor"]:checked').value;
  localStorage.setItem("milking-parlor", value);
}

function milk_pipeline() {
  let value = document.querySelector('input[name="milk-pipeline"]:checked').value;
  localStorage.setItem("milk-pipeline", value);
}

function milking_system() {
  let value = document.querySelector('input[name="milking-system"]:checked').value;
  localStorage.setItem("milking-system", value);
}

function hanging_part() {
  let value = document.querySelector('input[name="hanging-part"]:checked').value;
  localStorage.setItem("hanging-part", value);
}

function setCheckedPage(){
  if (localStorage.getItem("milking-parlor") != null) {
    document.getElementById("page1").setAttribute("class", "page true");
  }
  for (let index = 1; index <= 5; index++) {
    if (localStorage.getItem("option_pit" + index) != null && localStorage.getItem("input_pit" + index) != null) {
      document.getElementById("page2").setAttribute("class", "page true");
    }
  }
  for (let index = 1; index <= 5; index++) {
    if (localStorage.getItem("option_pump" + index) != null) {
      document.getElementById("page3").setAttribute("class", "page true");
    }
  }
  if (localStorage.getItem("milk-pipeline") != null) {
    document.getElementById("page4").setAttribute("class", "page true");
  }
  if (localStorage.getItem("milking-system") != null) {
    document.getElementById("page5").setAttribute("class", "page true");
  }
  if (localStorage.getItem("hanging-part") != null) {
    document.getElementById("page7").setAttribute("class", "page true");
  }
}
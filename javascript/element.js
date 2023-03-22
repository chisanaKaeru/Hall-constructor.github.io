function ul() {
  let ul = document.getElementById("list-element");
  return ul;
}

function li() {
  let li = document.createElement("li");
  li.setAttribute("class", "li-element");
  return li;
}

function text_title(text_title){
  let p = document.createElement("p");
  p.setAttribute("class", "text-title text-caption-li");
  let text = document.createTextNode(text_title);
  p.appendChild(text);
  return p;
}

function div_body(class_name) {
  let div = document.createElement("div");
  div.setAttribute("class", class_name);
  return div;
}

function text_body(text_body){
  let p = document.createElement("p");
  p.setAttribute("class", "text-body text-li");
  let text = document.createTextNode(localStorage.getItem(text_body));
  p.appendChild(text);
  return p;
}

function text_li(text1, text2){
  let p = document.createElement("p");
  p.setAttribute("class", "text-body text-li");
  let text = document.createTextNode(text1 + localStorage.getItem(text2));
  p.appendChild(text);
  return p;
}

function button_change(link){
  let a = document.createElement("a");
  a.setAttribute("href", link);
  let img = document.createElement("img");
  img.setAttribute("src", "image/edit.png");
  img.setAttribute("class", "button-change");
  a.appendChild(img);
  return a;
}

function createElement(){
  let Ul = ul();

  function parlor(){
    let Li = li();
    let textTitle = text_title("Доильный зал:");
    let textBody = text_body("milking-parlor");
    let divBody = div_body("text-element");
    let divBodyLi = div_body("container-li");
    divBody.appendChild(textBody);
    divBodyLi.append(textTitle, divBody);
    let link = button_change("index.html");
    Li.append(divBodyLi, link);
    return Li;
  }

  function pit(){
    let Li = li();
    let textTitle = text_title("Яма:");
    let divBody = div_body("text-element");
    let divBodyLi = div_body("container-li");
    for (let index = 1; index <= 6; index++) {
      if (localStorage.getItem("option-pit"+index) != null && localStorage.getItem("input-pit"+index) != null) {
        let option = text_li("Цех: ", "option-pit"+index);
        let input = text_li("Кол-во мест: ", "input-pit"+index);
        option.appendChild(input);
        divBody.appendChild(option);
      }
    }
    divBodyLi.append(textTitle, divBody);
    let link = button_change("number-of-seats.html");
    Li.append(divBodyLi, link);
    return Li;
  }

  function pump(){
    let Li = li();
    let textTitle = text_title("Установка вакуума:");
    let textBody = text_li("Фирма насоса: ", "vacuum-pump");
    let divBody = div_body("text-element");
    let divBodyLi = div_body("container-li");
    divBody.append(textBody);
    for (let index = 1; index <= 2; index++) {
      if (localStorage.getItem("pump-checkbox"+index) != null) {
        let textBody = text_body("pump-checkbox" + index);
        divBody.appendChild(textBody);
      }
    }
    divBodyLi.append(textTitle, divBody);
    let link = button_change("vacuum-pump.html");
    Li.append(divBodyLi, link);
    return Li;
  }

  function pipeline(){
    let Li = li();
    let textTitle = text_title("Молокопровод:");
    let textBody = text_body("milk-pipeline");
    let divBody = div_body("text-element");
    let divBodyLi = div_body("container-li");
    divBody.appendChild(textBody);
    divBodyLi.append(textTitle, divBody);
    let link = button_change("milk-pipeline.html");
    Li.append(divBodyLi, link);
    return Li;
  }

  function system(){
    let Li = li();
    let textTitle = text_title("Система доения:");
    let textBody = text_body("milking-system");
    let textBody_ = text_title("Динамическое");
    let divBody = div_body("text-element");
    let divBodyLi = div_body("container-li");
    divBody.append(textBody, textBody_);
    divBodyLi.append(textTitle, divBody);
    let link = button_change("milking-system.html");
    Li.append(divBodyLi, link);
    return Li;
  }

  function iaac(){
    let Li = li();
    let textTitle = text_title("Индентификация и активность:");

    let option = text_li("Версия ошейника: ", "iaac");
    let input = text_li("Количество: ", "iaac-input");
    let divBody = div_body("text-element");
    let divBodyLi = div_body("container-li");
    divBody.append(option, input);
    divBodyLi.append(textTitle, divBody);
    let link = button_change("identification-and-activity-system.html");
    Li.append(divBodyLi, link);
    return Li;
  }

  function part(){
    let Li = li();
    let textTitle = text_title("Подвесная часть:");
    let textBody = text_body("hanging-part");
    let divBody = div_body("text-element");
    let divBodyLi = div_body("container-li");
    divBody.appendChild(textBody);
    divBodyLi.append(textTitle, divBody);
    let link = button_change("hanging-part.html");
    Li.append(divBodyLi, link);
    return Li;
  }

  function pad(){
    let Li = li();
    let textTitle = text_title("Гигиена и содержание животных:");
    let divBody = div_body("text-element");
    let divBodyLi = div_body("container-li");
    for (let index = 1; index <= 6; index++) {
      if (localStorage.getItem("washing"+index) != null) {
        let textBody = text_body("washing" + index);
        divBody.appendChild(textBody);
      }
    }
    divBodyLi.append(textTitle, divBody);
    let link = button_change("optional-equipment.html");
    Li.append(divBodyLi, link);
    return Li;
  }

  function equipment(){
    let Li = li();
    let textTitle = text_title("Дополнительное оборудование:");
    let divBody = div_body("text-element");
    let divBodyLi = div_body("container-li");
    for (let index = 1; index <= 6; index++) {
      if (localStorage.getItem("equipment"+index) != null) {
        let textBody = text_body("equipment" + index);
        divBody.appendChild(textBody);
      }
    }
    divBodyLi.append(textTitle, divBody);
    let link = button_change("optional-equipment.html");
    Li.append(divBodyLi, link);
    return Li;
  }

  Ul.append(parlor(), pit(), pump(), pipeline(), system(), iaac(), part(), pad(), equipment());
}
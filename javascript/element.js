function addElement(key, title_text, body_text, link_text) {
  let ul = document.getElementById("list-element");
  let li = document.createElement("li");
  li.setAttribute("class", "li-element");

  function text_title(text_element){
    let p = document.createElement("p");
    p.setAttribute("class", "text-body");

    let text = document.createTextNode(text_element+":");

    p.appendChild(text);
    return p;
  }

  function text_body(text_element){
    let div = document.createElement("div");
    div.setAttribute("class", "text-elemnt");

    let p = document.createElement("p");
    p.setAttribute("class", "text-body");

    let text = document.createTextNode(text_element);

    p.appendChild(text);
    div.appendChild(p);
    return div;
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

  switch (key) {

    case 1:
      li.append(text_title("СИиА"), text_body(localStorage.getItem("iaac")), text_body("Количество: " + localStorage.getItem("iaac-input")), button_change(link_text));
      break;

    case 2:
      li.append(text_title(title_text), text_body(localStorage.getItem(body_text)), button_change(link_text));
      break;
    case 3:

      li.append(text_title("Дополнительное оборудование"));
      if (localStorage.getItem("equipment1") != null) {
        li.append(text_body(localStorage.getItem("equipment1")));
      }
      if (localStorage.getItem("equipment2") != null) {
        li.append(text_body(localStorage.getItem("equipment2")));
      }
      if (localStorage.getItem("equipment3") != null) {
        li.append(text_body(localStorage.getItem("equipment3")));
      }
      if (localStorage.getItem("equipment4") != null) {
        li.append(text_body(localStorage.getItem("equipment4")));
      }
      if (localStorage.getItem("equipment5") != null) {
        li.append(text_body(localStorage.getItem("equipment5")));
      }
      li.append(button_change("optional-equipment.html"));
      break;

    default:
      li.append(text_title(title_text), text_body(localStorage.getItem(body_text)), button_change(link_text));
      break;
  }


  ul.append(li);
}

function sdf(){
  addElement(0, "Доильный зал", "milking-parlor", "index.html");
  /* исправить */addElement(2, "Яма", "milking-parlor", "fdf", "number-of-seats.html");
  /* исправить */addElement(2, "Вакуумный насосы", "milking-parlor", "vacuum-pump.html");
  addElement(0, "Молокопровод", "milk-pipeline", "milk-pipeline.html");
  addElement(0, "Система доения", "milking-system", "milking-system.html");
  addElement(1);
  addElement(0, "Подвисная часть", "hanging-part", "hanging-part.html");
  addElement(0, "Гигиена и содержание животных", "washing-pad", "washing-pad.html");
  addElement(3);
}
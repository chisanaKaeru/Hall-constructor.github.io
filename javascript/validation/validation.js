var today = new Date();

$("#phone").mask("+375 (99) 999-99-99");

      $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
          $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
          var range = $(this).get(0).createTextRange();
          range.collapse(true);
          range.moveEnd("character", pos);
          range.moveStart("character", pos);
          range.select();
        }
      };

      $('input[type="tel"]').click(function () {
        $(this).setCursorPosition(6);
      });

let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputEmail = document.querySelector('.js-input-email'),
    inputPhone = document.querySelector('.js-input-phone');


function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function validateCountry(country) {
    let re = new RegExp('.co$');
    return re.test(String(country).toLowerCase());
}

document.getElementById('form').addEventListener('submit', function(event) {

  event.preventDefault();

  const serviceID = 'default_service';
  const templateID = 'template_hlrsq43';

  let flag = false;
  let emailVal = inputEmail.value,
      emptyInputs = Array.from(formInputs).filter(input => input.value === '');

  formInputs.forEach(function (input) {
    if (input.value === '') {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
      flag = true;
    }
  });
  if (emptyInputs.length !== 0) {
    return false;
  }

  if(!validateEmail(emailVal)) {
      inputEmail.classList.add('error');
      return false;
  } else {
      inputEmail.classList.remove('error');
      flag = true;
  }

  if (validateCountry(emailVal)) {
      inputEmail.classList.add('error');
      return false;
  } else {
      inputEmail.classList.remove('error');
      flag = true;
  }
  if (flag) {

    let params = {
      name: document.getElementById('name').value,
      name_organization: document.getElementById('name_organization').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      date: today.toLocaleDateString('ru-RU'),
      milking_parlor: localStorage.getItem('milking-parlor'),
      pit: pit(),
      pump: pump(),
      milk_pipeline: localStorage.getItem('milk-pipeline'),
      milking_system: localStorage.getItem('milking-system'),
      iaac: localStorage.getItem('iaac') + '\nКоличество: ' + localStorage.getItem('iaac-input'),
      hanging_part: localStorage.getItem('hanging-part'),
      pad: pad(),
      equipment: equipment(),
      }

    emailjs.send(serviceID,templateID, params).then(() => {
      alert('Сообщение отправлено!');
    }, (err) => {
        alert(JSON.stringify(err));
      });
  }
});

function pit(){
  let text = '';
  for (let index = 1; index <= 6; index++) {
    if (localStorage.getItem("option-pit"+index) != null && localStorage.getItem("input-pit"+index) != null) {
      text += 'Цех: '+ localStorage.getItem("option-pit"+index) + '     Кол-во мест: ' + localStorage.getItem("input-pit"+index) + '\n';
    }
  }
  return text;
}

function pump(){
  let text = 'Фирма насоса: ' + localStorage.getItem("vacuum-pump") + '\n';
  for (let index = 1; index <= 2; index++) {
    if (localStorage.getItem("pump-checkbox"+index) != null) {
      text += localStorage.getItem("pump-checkbox"+index) + '\n';
    }
  }
  return text;
}

function pad(){
  let text ="";
  for (let index = 1; index <= 6; index++) {
    if (localStorage.getItem("washing"+index) != null) {
      text += localStorage.getItem("washing"+index) + '\n';
    }
  }
  return text;
}

function equipment(){
  let text ="";
  for (let index = 1; index <= 6; index++) {
    if (localStorage.getItem("equipment"+index) != null) {
      text += localStorage.getItem("equipment"+index) + '\n';
    }
  }
  return text;
}
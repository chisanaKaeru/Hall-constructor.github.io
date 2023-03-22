function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateCountry(country) {
  let re = new RegExp('.co$');
  return re.test(String(country).toLowerCase());
}

function generate(){
    formInputs = document.querySelectorAll('.js-input');
    inputEmail = document.querySelector('.js-input-email');
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
      let name = document.getElementById('name').value;
      localStorage.setItem('name', name);

      let name_organization = document.getElementById('name_organization').value;
      localStorage.setItem('name_organization', name_organization);

      let email = document.getElementById('email').value;
      localStorage.setItem('email', email);

      let phone = document.getElementById('phone').value;
      localStorage.setItem('phone', phone);
      window.open('generatePDF.html');
    }

}

function createPDF(){
  pdfMake.createPdf(docInfo).open();
  window.close();
}

function createPDFF(){

  pdfMake.createPdf(docInfo).getDataUrl(function (outDoc) {
    //window.open(outDoc);
    window.location= outDoc;
  });
}

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

var today = new Date();
var docInfo = {

  title: 'Заявка на доильный зал',
  pageSize:'A4',
  pageOrientation:'portrait',
  pageMargins:[25,25,25,60],

  content:[
    {
      text:'От: '+localStorage.getItem('name'),
      fontSize:14,
      alignment:'right'
    },
    {
      text:'Наименование организации: '+localStorage.getItem('name_organization'),
      fontSize:14,
      alignment:'right'
    },
    {
      text:'Телефон для связи: '+localStorage.getItem('phone'),
      fontSize:14,
      alignment:'right'
    },
    {
      text:'Адрес электронной почты: '+localStorage.getItem('email'),
      fontSize:14,
      alignment:'right'
    },
    {
      text:'Дата подачи заявки: '+ today.toLocaleDateString('ru-RU'),
      fontSize:14,
      alignment:'right'
    },
    {
      text:'ЗАЯВКА',
      fontSize:14,
      alignment:'center',
      margin:[0,25,0,0]
    },
    {
      text:'на Доильный зал',
      fontSize:14,
      alignment:'center'
    },
    {
      columns:[
        {
          widths:'250',
          text:'Наименование детали',
          margin:[0,25,0,0]
        },
        {
          widths:'250',
          text:'Тип детали',
          margin:[0,25,0,0]
        }
      ]
    },
    {
      table:{
        widths:[250,280],
        body:[
          ['Доильный зал',localStorage.getItem('milking-parlor')],
          ['Яма',pit()],
          ['Вакуумный насос',pump()],
          ['Молокопровод',localStorage.getItem('milk-pipeline')],
          ['Система доения',localStorage.getItem('milking-system') + '\nДинамическое'],
          ['Идентификация и активность',localStorage.getItem('iaac') + '\nКоличество: ' + localStorage.getItem('iaac-input')],
          ['Подвесная часть',localStorage.getItem('hanging-part')],
          ['Гигиена и содержание животных',pad()],
          ['Дополнительное оборудование',equipment()],
        ]
      }
    }
  ],

}
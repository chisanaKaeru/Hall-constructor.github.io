function createPDF(){
  let name = document.getElementById('name').value;
  localStorage.setItem('name', name);

  let name_organization = document.getElementById('name_organization').value;
  localStorage.setItem('name_organization', name_organization);

  let email = document.getElementById('email').value;
  localStorage.setItem('email', email);

  let phone = document.getElementById('phone').value;
  localStorage.setItem('phone', phone);

  pdfMake.createPdf(docInfo).open();
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
  let text = 'Фирма насоса: ' + localStorage.getItem("pump") + '\n';
  for (let index = 1; index <= 6; index++) {
    if (localStorage.getItem("option-pump"+index) != null) {
      text += '\nРезервный: ' + localStorage.getItem('pad'+index) + '\nМощность насоса: ' + localStorage.getItem("option-pump"+index) + '\n';
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

  pageSize:'A4',
  pageOrientation:'portrait',
  pageMargins:[25,25,25,60],

  content:[
    {
      text:'Кому Полиэфир АГРО',
      fontSize:14,
      alignment:'right'
    },
    {
      text:'Директору Гецман А. С.',
      fontSize:14,
      alignment:'right'
    },
    {
      text:'От '+localStorage.getItem('name_organization'),
      fontSize:14,
      alignment:'right'
    },
    {
      text:'т. для связи '+localStorage.getItem('phone'),
      fontSize:14,
      alignment:'right'
    },
    {
      text:'Дата подачи заявки: '+ today.toLocaleDateString('en-US'),
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
      text:'на доильный зал',
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
          ['Размер ям',pit()],
          ['Вакуммный насосы',pump()],
          ['Молокопровод',localStorage.getItem('milk-pipeline')],
          ['Система доения',localStorage.getItem('milking-system')],
          ['Идентификация и активность',localStorage.getItem('iaac') + '\nКоличество: ' + localStorage.getItem('iaac-input')],
          ['Подвесная часть',localStorage.getItem('hanging-part')],
          ['Гигиена и содержание животных',pad()],
          ['Дополнительное оборудование',equipment()],
        ]
      }
    }
  ],

}
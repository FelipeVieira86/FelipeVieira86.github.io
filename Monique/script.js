// const pesquisaCpf = document.getElementById('pesquisacpf');
// const pesquisaCpfBtn = document.getElementById('pesquisacpfbtn');
// const nomeCliente = document.getElementById('name');
// const nomeClienteCiente = document.getElementById('nomeciente');
// const cpf = document.getElementById('cpf');
// const tecnicaCiente = document.getElementById('tecnicaciente');
// const tecnicaUnha = document.getElementById('tecnicaunha');
// const formulario = document.getElementById('form');
// const saveFormBtn = document.getElementById('save');
// const updateFormBtn = document.getElementById('update');
// const clearFormBtn = document.getElementById('clear');
// const infoBtn = document.getElementById('infobtn');
// const tabelaAnotacao = document.getElementById('anotacoes');
// const manutencao = document.getElementById('manutencao');
// const anotacao = document.getElementById('anotacao');
// let arraykey = [];

// // Carrega o forms puxando pelo CPF
// pesquisaCpfBtn.addEventListener('click', function () {
//   if (pesquisaCpf.value.length < 11 || pesquisaCpf.value.length > 11) {
//     alert('cpf inválido');
//   } else {
//     arraykey = JSON.parse(localStorage.getItem(pesquisaCpf.value));
//     const array = document.querySelectorAll('input');
//     for (let index = 0; index < array.length; index++) {
//       if (array[index + 1] === undefined) {
//         break;
//       }
//       if (array[index + 1].type == 'radio') {
//         if (arraykey[index] == 'true') {
//           array[index + 1].checked = true;
//         }
//       } else if (array[index + 1].type == 'checkbox') {
//         if (arraykey[index] == 'true') {
//           array[index + 1].checked = true;
//         }
//       } else {
//         array[index + 1].value = arraykey[index];
//       }
//     }
//     tabelaAnotacao.innerHTML = '';
//     tabelaAnotacao.innerHTML = arraykey[arraykey.length - 1];
//   }
// });

// // Limpa o form
// clearFormBtn.addEventListener('click', function () {
//   const array = document.querySelectorAll('input');
//   for (let index = 0; index < array.length; index++) {
//     if (array[index].type == 'radio') {
//       if (array[index].checked) {
//         array[index].checked = false;
//       }
//     } else if (array[index].type == 'checkbox') {
//       if (array[index].checked) {
//         array[index].checked = false;
//       }
//     } else {
//       array[index].value = '';
//     }
//   }
//   tabelaAnotacao.innerHTML = '';
//   infoBtn.innerText = 'Dados apagados';
// });

// // Salva o form e sobrescreve o cpf
// updateFormBtn.addEventListener('click', function () {
//   if (cpf.value === '') {
//     alert('cpf em branco');
//     event.preventDefault();
//   } else if (cpf.value.length < 11 || cpf.value.length > 11) {
//     alert('cpf inválido');
//   } else {
//     const arraykey = setArrayKey();
//     localStorage.setItem(cpf.value, JSON.stringify(arraykey));
//     infoBtn.innerText = 'Cadastro atualizado com sucesso';
//   }
// });

// // Define array para o localstorage
// function setArrayKey() {
//   const array = document.querySelectorAll('input');
//   let newarray = [];
//   for (let index = 1; index < array.length; index++) {
//     if (array[index].type == 'radio') {
//       if (array[index].checked) {
//         newarray.push('true');
//       } else {
//         newarray.push('false');
//       }
//     } else if (array[index].type == 'checkbox') {
//       if (array[index].checked) {
//         newarray.push('true');
//       } else {
//         newarray.push('false');
//       }
//     } else {
//       newarray.push(array[index].value);
//     }
//   }
//   newarray.push(tabelaAnotacao.innerHTML);
//   return newarray;
// }

// // Salva o form caso não exista o cpf
// saveFormBtn.addEventListener('click', function () {
//   if (cpf.value === '') {
//     alert('cpf em branco');
//     event.preventDefault();
//   } else if (
//     localStorage.getItem(cpf.value) === null &&
//     cpf.value.length === 11
//   ) {
//     const arraykey = setArrayKey();
//     console.log(arraykey);
//     localStorage.setItem(cpf.value, JSON.stringify(arraykey));
//     infoBtn.innerText = 'Cadastro salvo com sucesso';
//   } else if (cpf.value.length < 11 || cpf.value.length > 11) {
//     alert('cpf inválido');
//   } else {
//     alert('cadastro já existe!');
//   }
// });

// // Redefine final parte ciente
// nomeCliente.addEventListener('keyup', function () {
//   nomeClienteCiente.innerHTML = nomeCliente.value;
// });

// tecnicaUnha.addEventListener('change', function () {
//   tecnicaCiente.innerHTML = event.target.value;
// });

// // Adiciona tarefas na area de Manutenção e Anotações
// const addTarefa = document.getElementById('addtarefa');
// addTarefa.addEventListener('click', function () {
//   let div1 = document.createElement('div');
//   let label1 = document.createElement('label');
//   let div2 = document.createElement('div');
//   let label2 = document.createElement('label');
//   div1.appendChild(label1);
//   div2.appendChild(label2);
//   tabelaAnotacao.appendChild(div1);
//   tabelaAnotacao.appendChild(div2);
//   label1.innerText = manutencao.value;
//   label2.innerText = anotacao.value;
//   div1.className = 'form-group col-md-3';
//   div2.className = 'form-group col-md-9';
//   anotacao.value = '';
//   manutencao.value = '';
// });

// // torna a lista na area de manutenção e anotação em um input editavel
// let area = null;
// let view = tabelaAnotacao;

// // view.onclick = function () {
// //   editStart();
// // };
// tabelaAnotacao.addEventListener('click', function () {
//   editStart();
// });
// function editStart() {
//   const target = event.target;
//   if (target.classList.contains('form-group')) {
//     event.preventDefault();
//   }
//   area = document.createElement('input');
//   area.className = 'col-md-12';
//   area.value = event.target.innerText;

//   area.onkeydown = function (event) {
//     if (event.key == 'Enter') {
//       this.blur();
//     }
//   };

//   area.onblur = function () {
//     editEnd();
//   };
//   view = event.target;
//   view.replaceWith(area);
//   area.focus();
// }

// function editEnd() {
//   view.innerHTML = area.value;
//   area.replaceWith(view);
// }
// ---------------------------------------------------------
const pesquisaCpf = document.getElementById('pesquisacpf');
const pesquisaCpfBtn = document.getElementById('pesquisacpfbtn');
const nomeCliente = document.getElementById('name');
const nomeClienteCiente = document.getElementById('nomeciente');
const cpf = document.getElementById('cpf');
const tecnicaCiente = document.getElementById('tecnicaciente');
const tecnicaUnha = document.getElementById('tecnicaunha');
const formulario = document.getElementById('form');
const saveFormBtn = document.getElementById('save');
const updateFormBtn = document.getElementById('update');
const clearFormBtn = document.getElementById('clear');
const infoBtn = document.getElementById('infobtn');
const tabelaAnotacao = document.getElementById('anotacoes');
const manutencao = document.getElementById('manutencao');
const anotacao = document.getElementById('anotacao');
let arraykey = [];

// Carrega o forms puxando pelo CPF
pesquisaCpfBtn.addEventListener('click', function () {
  if (pesquisaCpf.value.length < 11 || pesquisaCpf.value.length > 11) {
    alert('cpf inválido');
  } else {
    arraykey = JSON.parse(localStorage.getItem(pesquisaCpf.value));
    const array = document.querySelectorAll('input');
    for (let index = 0; index < array.length; index++) {
      if (array[index + 1] === undefined) {
        break;
      }
      if (array[index + 1].type == 'radio') {
        if (arraykey[index] == 'true') {
          array[index + 1].checked = true;
        }
      } else if (array[index + 1].type == 'checkbox') {
        if (arraykey[index] == 'true') {
          array[index + 1].checked = true;
        }
      } else {
        array[index + 1].value = arraykey[index];
      }
    }
    tabelaAnotacao.innerHTML = '';
    tabelaAnotacao.innerHTML = arraykey[arraykey.length - 1];
  }
});

// Limpa o form
clearFormBtn.addEventListener('click', function () {
  const array = document.querySelectorAll('input');
  for (let index = 0; index < array.length; index++) {
    if (array[index].type == 'radio') {
      if (array[index].checked) {
        array[index].checked = false;
      }
    } else if (array[index].type == 'checkbox') {
      if (array[index].checked) {
        array[index].checked = false;
      }
    } else {
      array[index].value = '';
    }
  }
  tabelaAnotacao.innerHTML = '';
  infoBtn.innerText = 'Dados apagados';
});

// Salva o form e sobrescreve o cpf
updateFormBtn.addEventListener('click', function () {
  if (cpf.value === '') {
    alert('cpf em branco');
    event.preventDefault();
  } else if (cpf.value.length < 11 || cpf.value.length > 11) {
    alert('cpf inválido');
  } else {
    const arraykey = setArrayKey();
    localStorage.setItem(cpf.value, JSON.stringify(arraykey));
    infoBtn.innerText = 'Cadastro atualizado com sucesso';
  }
});

// Define array para o localstorage
function setArrayKey() {
  const array = document.querySelectorAll('input');
  let newarray = [];
  for (let index = 1; index < array.length; index++) {
    if (array[index].type == 'radio') {
      if (array[index].checked) {
        newarray.push('true');
      } else {
        newarray.push('false');
      }
    } else if (array[index].type == 'checkbox') {
      if (array[index].checked) {
        newarray.push('true');
      } else {
        newarray.push('false');
      }
    } else {
      newarray.push(array[index].value);
    }
  }
  newarray.push(tabelaAnotacao.innerHTML);
  return newarray;
}

// Salva o form caso não exista o cpf
saveFormBtn.addEventListener('click', function () {
  if (cpf.value === '') {
    alert('cpf em branco');
    event.preventDefault();
  } else if (
    localStorage.getItem(cpf.value) === null &&
    cpf.value.length === 11
  ) {
    const arraykey = setArrayKey();
    console.log(arraykey);
    localStorage.setItem(cpf.value, JSON.stringify(arraykey));
    infoBtn.innerText = 'Cadastro salvo com sucesso';
  } else if (cpf.value.length < 11 || cpf.value.length > 11) {
    alert('cpf inválido');
  } else {
    alert('cadastro já existe!');
  }
});

// Redefine final parte ciente
nomeCliente.addEventListener('keyup', function () {
  nomeClienteCiente.innerHTML = nomeCliente.value;
});

tecnicaUnha.addEventListener('change', function () {
  tecnicaCiente.innerHTML = event.target.value;
});

// Adiciona tarefas na area de Manutenção e Anotações
const addTarefa = document.getElementById('addtarefa');
addTarefa.addEventListener('click', function () {
  const div1 = document.createElement('div');
  const label1 = document.createElement('label');
  const div2 = document.createElement('div');
  const label2 = document.createElement('label');
  div1.appendChild(label1);
  div2.appendChild(label2);

  //[Lizzard] - Declaração dos elements Child para simplificar a atribuição de event Listener
  const child1 = tabelaAnotacao.appendChild(div1);
  const child2 = tabelaAnotacao.appendChild(div2);

  child1.innerText = manutencao.value;
  child2.innerText = anotacao.value;
  div1.className = 'form-group col-md-3';
  div2.className = 'form-group col-md-9';

  child1.addEventListener('click', editStart);
  child2.addEventListener('click', editStart);

  anotacao.value = '';
  manutencao.value = '';
});

// torna a lista na area de manutenção e anotação em um input editavel
let view = tabelaAnotacao;

// view.onclick = function () {
//   editStart();
// };

/* tabelaAnotacao.addEventListener('click', editStart); */

function editStart() {
  const target = event.target;
  let area = null;
  if (target.classList.contains('form-group')) {
    event.preventDefault();
  }
  area = document.createElement('input');

  //[Lizzard] - Mantem as classes originais
  area.className = target.className;
  area.value = event.target.innerText;

  area.onkeydown = function (event) {
    if (event.key == 'Enter') {
      this.blur();
    }
  };

  area.onblur = function () {
    view.innerHTML = area.value;
    area.replaceWith(view);
  };
  view = event.target;
  view.replaceWith(area);
  area.focus();
}

//[Lizzard] - Exclusão da função endEdit
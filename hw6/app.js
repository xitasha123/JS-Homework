// const head = document.head;
// console.log(head);

// const body = document.body;
// console.log(body);

// console.log('list of children', body.children);

// let divFirst = document.querySelector('div');;

// for (let element of divFirst.children) {
//   console.log(element);
// }

// let divFirstChilds = divFirst.children;

// for (let i = 1; i < divFirstChilds.length-1; i++) {
//   console.log(divFirstChilds[i]);
// }


// Слайд 15

// Задание 1

// function ifParent(parent, child) {
//   if (parent.contains(child)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(ifParent(document.body.children[0], document.querySelector('mark')));
// // Задание 2

// const linksNoUl = document.querySelectorAll('a');
// for (let i=0; i<linksNoUl.length; i++ ) {
//   if(!linksNoUl[i].closest('ul')) {
//     console.log(linksNoUl[i]);
//   }
  
// }


// // Задание 3

// const ul = document.querySelector('ul');
// console.log('previous', ul.previousElementSibling);
// console.log('next', ul.nextElementSibling);

const name = document.querySelector('.name');
const login = document.querySelector('.login');
const password = document.querySelector('.password');
const checkbox = document.querySelector('.checkbox');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    if (name.value.length < 3 || name.value.length > 40) {
        return console.log('Неправильно заполнено поле с именем. Введите пожалуйста имя от 3 до 39 символов.')
    };

    if (login.value === '') {
        return console.log('Введите пожалуйста логин');
    };

    if ((password.value.length < 9)||(!password.value.match(/[A-ZА-Я]/))||(!password.value.match(/[a-zа-я]/))||!password.value.match( /\d/ )) {
        return console.log('Не соблюдены правила ввода пароля')
    };

    if(!checkbox.checked) {
        return console.log('Вы не согласились с нашими условиями!')
    };

    
    return console.log('Все хорошо')
})


// Я закоментировал часть кода, т.к разные этапы. 
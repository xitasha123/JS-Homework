const jas = document.querySelector('div.jas');
// Задание 1

const p = document.querySelector('p');
jas.insertAdjacentHTML('beforeend', p.textContent);
console.log(p.textContent);

// Задание 2

const el = document.querySelector('div')

function getInfoObj(element) {
    let result = {
        name: element.tagName,
        type: element.nodeType,
        children: element.childElementCount
    }
    return result;
}

console.log(getInfoObj(el));

// Задание 3

const ul = document.querySelector('ul');
const textArray = [];

function getTextFromUl(element) {
    for (let i = 0; i <element.childElementCount; i++) {
        textArray.push(element.children[i].textContent);
    }
    return textArray;
}

console.log(getTextFromUl(ul));

// Слайд 11

// задание 1

ul.classList.add('list');

// Задание 2
let findA = ul;
while (findA.tagName !== 'A' && findA.nextElementSibling !== null) {
    findA = findA.nextElementSibling;
}
// const aAfterUl = document.body;

while (i.nextElementSibling )

// Задание 3

const li = document.querySelectorAll('li');;

for (i = 0; i < li.length; i++) {
    li[i].classList.add('item');
    if(i % 2 !== 0) {
        li[i].classList.remove('item');
    }
}

console.log(li);

// Задача 4

const a = document.querySelectorAll('a');
for(i = 0; i < a.length; i++) {
    a[i].classList.add('custom-link');
}
console.log(a);


// Слайды 17-19

// Задача 1
const newLi = [];
newLi.className = 'new-item';
for (let i = 0;i < 4; i++){
    newLi[i] = document.createElement('li');
    newLi[i].classList.add('new-item');
    ul.append(newLi[i]);
    newLi[i].textContent = 'item ' + ul.childElementCount;
}

// Задача 2

let linkArray = document.querySelectorAll('li a');
let strong = [];

for (let i = 0; i < linkArray.length; i++){
    strong[i] = document.createElement('strong');
    linkArray[i].append(strong[i]);
}


// Задача 3

const img = document.createElement('img');
img.src = 'cat.jpg';
img.alt = 'cat';
document.body.prepend(img);

// Задача 4

const mark = document.querySelector('mark');
mark.classList.add('green');
const green = document.createTextNode('green');
mark.append(green);

// Задача 5

let liArray = document.querySelectorAll('li');

for(let i = liArray.length - 1;  i > -1; i--) {
    ul.append(liArray[i]);
}

// Задача 6

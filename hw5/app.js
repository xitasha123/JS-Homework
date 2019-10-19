// const text = document.querySelector('div.first p span');
// const text = document.getElementById('Ia');
// const text = document.querySelector('div.first p span')
// const text = document.getElementsByClassName('first');
// const text = document.getElementsByName('input');
// const text = document.getElementsByTagName('div')
// console.log(text);

// const input = document.querySelector('input');
// const btn = document.querySelector('button.btn-get-data');
// console.log(input);
// console.log(btn);

// function handleClick() {
//   console.log('Hello!')
// }

// input.addEventListener('click', function(event){
//   console.log('click click', event)
// })

// const input = document.querySelector('input.first');
// const input2 = document.querySelector('input.second');
// const btn = document.querySelector('.btn-get-data');

// btn.addEventListener('click', () => {
//   console.log('myvalue ----', (+(input.value) + +(input2.value)) )
// })

const ulFirst = document.querySelector('ul.first');
const liList1 = document.querySelectorAll('ul.first li');

// console.log('list of li', liList1);
// console.log('list of li chilNodes', ulFirst.childNodes);
// console.log('list of li children', ulFirst.children);

console.log('sib 1 nextsibl', ulFirst.nextSibling);
console.log('sib nextelement', ulFirst.nextElementSibling);

// console.log('parent', ulFirst.parentElement);

// console.log('last child', ulFirst.lastElementChild);
// console.log('first child', ulFirst.firstElementChild);

// const span = document.querySelector('#spanID');

// console.log(span.closest('div'))

const btn1 = document.getElementById('hotels');
const btn2 = document.getElementById('cars');
const btn3 = document.getElementById('flights');

const tab1 = document.querySelector('.hotels');
const tab2 = document.querySelector('.cars');
const tab3 = document.querySelector('.flights');

const tabsArraay = document.querySelectorAll('.tab');

btn1.addEventListener('click', function() {
  tabsArraay.forEach((node) => {
    node.classList.remove('show');
  })
  tab1.classList.add('show');
})
btn2.addEventListener('click', function() {
  tabsArraay.forEach((node) => {
    node.classList.remove('show');
  })
  tab2.classList.add('show');
})
btn3.addEventListener('click', function() {
  tabsArraay.forEach((node) => {
    node.classList.remove('show');
  })
  tab3.classList.add('show');
})

class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
}
const http = new CustomHttp();
http.get(`http://localhost:3000/invoices`, loadInvoices);
function loadInvoices(response) {
    const parsedList = JSON.parse(response);
    const invoicesInstance = new Invoices();
    parsedList.forEach((post) => {
        invoicesInstance.render(post);
    })
}

class Invoices {
    constructor() {
        this.wrapper = document.querySelector('tbody')
    }
    render(todo) {
        const html = `<tr>
                <td>${todo.date_created}</td>
                <td>${todo.number}</td>
                <td>${todo.date_supplied}</td>
                <td>${todo.comment}</td>
            </tr>`;
        this.wrapper.insertAdjacentHTML('beforeend', html);
    }
}

const containerHidden = document.querySelector('.container-hidden');
const addNew = document.querySelector('.add-new');
const save = document.querySelector('.save');
const number = document.querySelector('[name="number"]');
const invoice = document.querySelector('[name="invoice"]');
const supply = document.querySelector('[name="supply"]');
const comment = document.querySelector('[name="comment"]');

addNew.addEventListener('click', showModal);
save.addEventListener('click', renderTD)

function showModal() {
    containerHidden.style.display = 'block';
}

function renderTD(event) {
    event.preventDefault();
    const html = `<tr>
                <td>${invoice.value}</td>
                <td>${number.value}</td>
                <td>${supply.value}</td>
                <td>${comment.value}</td>
            </tr>`;
    document.querySelector('tbody').insertAdjacentHTML('beforeend', html);
    
    containerHidden.style.display = 'none';

    number.value = '';
    invoice.value = '';
    supply.value = '';
    comment.value = '';
}





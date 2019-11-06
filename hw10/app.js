// Отображать список книг
// Добавление книги
// Сортирока (по цене, по алф)
// Фильтрация (по стране, по автору)
// валидация
// редактирование книги
// сохранение в локал стор

//Название книги, цена, автор, страна,
// картинка(по умолчанию), рейтинг(select), жанр (строка)
// - массив


const ARRAY_FIELDS = [
    {name: 'book_name', label: 'Название'},
    {name: 'price', label: 'Цена'},
    {name: 'author', label: 'Автор'},
    {name: 'language', label: 'Язык'},
    {name: 'url', label: 'Картинка'},
    {
        name: 'rate',
        label: 'Рейтинг',
        choices: [1, 2, 3, 4, 5],
        type: 'select',
    },
    {name: 'genre', label: 'Жанр'},
];

const books = [];

class Field {
    constructor({name, label}) {
        this.name = name;
        this.label = label;
    }
}

class InputField extends Field {
    render() {
        const html = `<label class="label"><span>${this.label}</span>
            <input name=${this.name} value="" />
        </label>`;
        return html
    }
}

class SelectField extends Field {
    constructor(field) {
        super(field)
        const {choices} = field;
        this.choices = choices;
    }
    render() {
        const html = `<label class="label"><span>${this.label}</span>
            <select name=${this.name}>
                ${this.choices.map(choice => `<option>${choice}</option>`)}
            </select>
        </label>`;
        return html
    }
}

class Form {
    constructor(selector) {
        this.selector = selector;
        this.init();
    }
    init() {
        const form = document.createElement('form');
        const bookForm = document.querySelector(this.selector);
        ARRAY_FIELDS.forEach((field) => {
            const inputName = field.type === 'select' ? new SelectField(field) : new InputField(field);
            const html = inputName.render();
            form.insertAdjacentHTML('beforeend', html);
        });
        const btn = document.createElement('button');
        btn.textContent = 'Добавить книгу';
        btn.classList = 'btn';
        btn.addEventListener('click', this.addBook);

        const btnHolder = document.createElement('div');
        btnHolder.classList = 'btn-holder'
        btnHolder.append(btn)

        const plusBtn = document.createElement('button');
        plusBtn.textContent = 'От дешевых к дорогим';
        plusBtn.classList = 'btn btn-plus';
        btnHolder.append(plusBtn);
        plusBtn.addEventListener('click', this.plusBook);

        const minusBtn = document.createElement('button');
        minusBtn.textContent = 'От дорогих к дешевым';
        minusBtn.classList = 'btn btn-minus';
        btnHolder.append(minusBtn);
        minusBtn.addEventListener('click', this.minusBook);

        form.append(btnHolder);
        bookForm.append(form);
    }

    addBook(event) {
        event.preventDefault();
        const book = ARRAY_FIELDS.reduce((acc, {name}) => {
            const input = document.querySelector(`[name="${name}"]`).value;
            return {...acc, [name]: input}
        }, {})
        books.push(book)
        const bookList = new ListBooks(book);
        bookList.updateListBooks();
        const htmlForm = document.querySelector('form');
        htmlForm.reset();
    }
  
    plusBook(book) {
        book.preventDefault();
        const newBooks = books.sort((a, b) => {
            return parseFloat(a.price) - parseFloat(b.price)
        })
        console.log(newBooks);
        const bookList = document.querySelector('#book-list');
        bookList.innerHTML = ' ';
        newBooks.forEach(field => {
            const bookList = new ListBooks(field);
            bookList.updateListBooks();
        })
    }

    minusBook(book) {
        book.preventDefault();
        const newBooks = books.sort((a, b) => {
            return parseFloat(b.price) - parseFloat(a.price)
        })
        console.log(newBooks);
        const bookList = document.querySelector('#book-list');
        bookList.innerHTML = ' ';
        newBooks.forEach(field => {
            const bookList = new ListBooks(field);
            bookList.updateListBooks();
        })
    }

}

class Book {
    constructor(book) {
        this.book = book;
    }
    render() {
        const {book_name, price, url, rate, author, language, genre} = this.book;
        const html = `<div class="new-div"> <div class = "span-holder"> <span> ${book_name} </div> <div class="img-holder"> <img src="${url}" alt="image" class="new-image"> </div> <span> Цена: ${price} </span> <span class="span-rate"> Рейтинг: ${rate} </span> <span class="span-author"> Автор: ${author} </span> <span class="span-language"> Язык: ${language} </span> <span class="span-genre"> Жанр: ${genre} </span> <div class="btn-list_holder"> <button class="btn btn-list">Купить</button> </div>`
        return html;
    }
}


class ListBooks {
    constructor(book) {
        this.book = book;
    }
    updateListBooks() {
        const bookList = document.querySelector('#book-list');
        const oneBook = new Book(this.book);
        const html = oneBook.render();
        bookList.insertAdjacentHTML('beforeend', html);
    }
}


const form = new Form('#book-form');
const listBooks = new ListBooks();

//Добавить верстку на форму
//Добавить верстку на список книг
//Добавить возможность отображать картинку по url
//Пофиксить ошибку с добавлением книг на страницу
//Написать метод для добавления одной книги (сейчас добаляются все)

//Реализовать минимум одну из задач: (внизу есть пара подсказок для задач со *)
//1.* Добавить метод validate в класс Form. Метод должен пройтись по объекту book(метод addBook) и проверить
//все ли поля заполнены правильно.

//2.* Добавить сортировку по цене. СортировкИ "от дешевых к дорогим" / "от дорогих к дешевым"

//3.* Добавить фильтрацию по жанрам.

//4. Добавить сортировку по названию книги

//5. Добавить фильтр по рейтингу









// Подсказки

//  Для сортировок. В js сделать две кнопки (или селект). При нажатии на кнопку сортируем глобальный массив books,
//  потом удаляем все книги со страницы и запускаем метод updateListBooks()

// Для фильтров. Сделайте в js список жанров и выведите их списком checkboxes.
// Создайте массив, в котором будет хранится список выбранных жанров. (selectedGenres)
// При нажатии на checkbox с фильтром, нужно добавлять в selectedGenres новый жанр, или, если такой жанр уже есть в этом массиве - удалять
// Сделать кнопку "отфильтровать"
// При нажатии на кнопку запускать метод filter(), который будет проходить по глобальному массиву books и проверять у каждого
// элемента строку genre. То есть, есть ли в этой строке, хотя бы один элемент массива selectedGenres.
// После фильтрации массива books, запускаем метод updateListBooks
// И ещё. Если вы будете изменять массив books, то после первой же фильтрации у вас потеряется часть элементов. Советую создать
//ещё один массив - unfilteredBooks

//Для валидации. Начнем с того, что нужно определить, что значит "заполнены правильно".
// Добавьте в массив, который описывает поля формы, несколько полей: обязательноЗаполнить, минКоличествоСимволов,
// максКоличествоСимволов, сообщениеОбОшибке - тут будет текст, который вы будете где-то выводить

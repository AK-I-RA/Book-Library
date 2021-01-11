let library = [];
new Book('The Giver', 'Lois Lowry', 1993, true)];	for (let i = 0; i < 5; i++) {
  library.push(new Book('Harry Potter and the Philosopher\'s Stone', 'J. K. Rowling', 1997, 'https://dynamic.indigoimages.ca/books/1408855658.jpg?altimages=false&scaleup=true&maxheight=515&width=380&quality=85&sale=2&lang=en', false))
}
let table = document.querySelector('#library')	let table = document.querySelector('#library')
render();


function Book(title, author, year, isRead) {	function Book(title, author, year, src, isRead) {
  this.title = title;	  this.title = title;
  this.src = src;
  this.author = author;	  this.author = author;
  this.year = year;	  this.year = year;
  this.isRead = isRead;	  this.isRead = isRead;
}	}

function render() {
  let books = document.querySelectorAll('.book-list > .book')
  books.forEach(book => {
    book.remove();
  })

  library.forEach((book, i) => {
    let template = document.getElementById('item-template');
    let bookDiv = template.cloneNode(true);
    bookDiv.id = 'book-item-' + i;
    bookDiv.style = '';
    bookDiv.querySelector('.book-title').textContent = book.title;
    bookDiv.querySelector('.book-year').textContent = book.year;
    bookDiv.querySelector('.book-author').textContent = book.author;
    bookDiv.querySelector('.book-img img').src = book.src;

    if (book.isRead) {
      bookDiv.querySelector('.reading-icon').src = 'images/reading-icon-clicked.png';
      bookDiv.querySelector('.read-status').textContent = 'Read';
    } else {
      bookDiv.querySelector('.read-status').textContent = 'Unread';
    }
    bookDiv.querySelector('.delete-icon').onclick = function() {
      library.splice(i, 1);
      render();
    }
    bookDiv.querySelector('.reading-icon').onclick = function() {
      book.isRead = !book.isRead;
      render();
    };
    document.querySelector('.book-list').appendChild(bookDiv);
  })
}

function addBook() {
  let title = document.querySelector('input[name="title"]').value;
  let author = document.querySelector('input[name="author"]').value;
  let year = document.querySelector('input[name="year"]').value;
  let source = document.querySelector('input[name="source"]').value;
  library.push(new Book(title, author, year, source, false));
  setFormDisplay('none');
  clearForm();
  render();
}

function setFormDisplay(style) {
  document.querySelector('.transparent-overlay').style.display = style;
}

function clearForm() {
  let inputs = document.querySelectorAll('.book-form > input');
  inputs.forEach(input => input.value = '')
}

window.onbeforeunload = function() {
  localStorage.setItem('library', JSON.stringify(library));
}
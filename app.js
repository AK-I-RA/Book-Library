let library = [new Book('The Giver', 'Lois Lowry', 1993, 'http://www.ravenoak.net/wp-content/uploads/2015/08/thegiver.jpg', true),
new Book('Harry Potter and the Philosopher\'s Stone', 'J. K. Rowling', 1997, 'https://dynamic.indigoimages.ca/books/1408855658.jpg?altimages=false&scaleup=true&maxheight=515&width=380&quality=85&sale=2&lang=en', false),
new Book('The Hunger Games', 'Suzanne Collins', 2008, 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/The_Hunger_Games.jpg/220px-The_Hunger_Games.jpg', false)];
if (localStorage.getItem('library')) {
  library = JSON.parse(localStorage.getItem('library'));
}
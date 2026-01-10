function renderBooks() {
  const booksWrapper = document.querySelector(".books");

  const books = getBooks();
  console.log(books);

  booksWrapper.innerHTML = `<div class="book">
<figure class="book__img--wrapper">
    <img src= ${books[0].url} class="book__img">
</figure>
<div class="book__title">
    Atomic Habits
</div>
<div class="book__ratings">
        <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star-half-alt"></i>
</div>
<div class="book__price">
    <span class="book__price--normal">$39.95</span> $12.95
</div>
</div>`;
}

setTimeout(() => {
  renderBooks();
});

// FAKE DATA

function getBooks() {
    return [
        {
            id: 1, 
            title:"Atomic Habits", 
            url: "assets/atomic habits.jpg",
            originalPrice: 39.95,
            salePrice: 12.95, 
            rating: 4.5, 
        }, 
        {
            id: 2, 
            title: "Crack the Coding Interview", 
            url: "assets/crack the coding interview.png", 
            originalPrice: 59.95, 
            salePrice: 14.95,
            rating: 4.5, 
        },
        {
            id: 3, 
            title: "Can't Hurt Me", 
            url: "assets/david goggins.jpeg", 
            originalPrice: 65.99, 
            salePrice: 28.95, 
            rating: 4.5, 
        },
        {
            id: 4, 
            title: "Deep Work", 
            url: "assets/deep work.jpeg", 
            originalPrice: 50.99, 
            salePrice: 22.95, 
            rating: 4.5,
        },
        {
            id: 5, 
            title: "The 10X Rule", 
            url: "assets/book-1", 
            originalPrice: 60.99, 
            salePrice: null, 
            rating: 3.5,
        },
        {
            id: 6, 
            title: "Be Obsessed Or Be Average", 
            url: "assets/book-2", 
            originalPrice: 50.95, 
            salePrice: null, 
            rating: 4,
        },
        {
            id: 7, 
            title: "Rich Dad Poor Dad",
            url: "assets/book-3", 
            originalPrice: 49.99, 
            salePrice: null, 
            rating: 4.5, 
        },
        {
            id: 8, 
            title: "Cashflow Quadrant", 
            url: "assets/book-4", 
            originalPrice: 39.95, 
            salePrice: null, 
            rating: 5,
        },
        {
            id: 9, 
            title: "48 Laws Of Power", 
            url: "assets/book-5", 
            originalPrice: 40.99, 
            salePrice: null, 
            rating: 3.5,
        },
        {
            id: 10, 
            title: "The 5 Second Rule", 
            url: "assets/book-6", 
            originalPrice: 35.95, 
            salePrice: null, 
            rating: 4.5,
        },
        {
            id: 11, 
            title: "Your Next Five Moves", 
            url: "assets/book-7", 
            originalPrice: 40.95, 
            salePrice: null, 
            rating: 5,
        },
        {
            id: 12, 
            title: "Mastery", 
            url: "assets/book-8", 
            originalPrice: 29.95, 
            salePrice: null, 
            rating: 3,
        }
    ]
}
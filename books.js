const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}


const books = getBooks();
// object destructuring
const { title, author, genres, reviews } = getBook(1);

// array destructuring
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre);
console.log(secondaryGenre);
console.log(otherGenres);

console.log("Title: ", title);
console.log("Author: ", author);

const lotr = getBook(1);
console.log("LOTR: ", lotr);

// map method
const arr = [1, 2, 3, 4, 5];
doubleArr = arr.map((num) => num * 2);
console.log(doubleArr);

const titles = books.map((book) => book.title);
console.log(titles);

const largeBooks = books.map((book) => book.pages > 1000);
console.log(largeBooks);   

// filter method
const bigBooks = books.filter((book) => book.pages > 1000);
console.log(bigBooks);
bigBookTitles = bigBooks.map((book) => book.title);
console.log(bigBookTitles);

const adventureBooks = books.filter((book) => book.genres.includes("adventure"));
adventureBooks.map((book) => console.log("Adventure Book: ", book.title));

// reduce method
const numArr = [1, 2, 3, 4, 5]; 
const numArrTotal = numArr.reduce((acc, num) => acc + num, 0);
console.log(numArrTotal);

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
console.log("Total Pages of all books: ", pagesAllBooks);

// sort method
const x = [3, 7, 1, 9, 2, 6];
// ascending sort
const sortedX = x.sort((a, b) => a - b);
console.log(sortedX);
//descending sort
const descSortedX = x.sort((a, b) => b - a);
console.log(descSortedX);
// note that sort method mutates the original array (i.e. sorts it in place) so x is now sorted.
// this method mutates the array and returns a reference to the same array.
console.log(x);
// if we don't want to mutate the original array, we can use the spread operator to create a new array
const y = [3, 7, 1, 9, 2, 6];
const sortedY = [...y].sort((a, b) => a - b);
console.log(sortedY);
console.log(y);

// or we can use the slice method to create a new array
/* the slice method in JavaScript is used to create a shallow copy of a portion of an array into a new array object. 
It doesn't modify the original array. The method takes two optional arguments: the start index and the end index.

Here’s how it works:

Start Index (Optional): The index at which to begin the extraction. If omitted, the slice begins from the index 0.
End Index (Optional): The index before which to end the extraction. The slice extracts up to but not including the end index. 
If omitted, the slice extracts through the end of the array.
*/
const z = [3, 7, 1, 9, 2, 6];
const sortedZ = z.slice().sort((a, b) => a - b);
console.log(sortedZ);
console.log(z);

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages.map((book) => console.log("Book Title: ", book.title, "Pages: ", book.pages));





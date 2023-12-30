
//filter() --> it is applied on array to filter some elements based on condition . The best part of filter() is that it's return an array of elements so we can use this returned array in any way we require


//books is an array of objects --
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //problem statement --> print all the books whose genre "Science"
//   let scienceBooks = books.filter( (bookItem) => {
//     return bookItem.genre === "Science";
//     //when we wrire code {} inside the scope we need to explicitely return
//   })

  //console.log(scienceBooks);

  //problem statement --> print all the books whose genre = "Non-Fiction" and publish after 1981

// let non_fiction = books.filter( (bookItem) => {
//     return (bookItem.genre === "Non-Fiction") && (bookItem.publish > 1981)
// });

// console.log(non_fiction);

//map() --> it is an essential function to manipulate array elements on the go . It is a really useful tool

// let numArr = [10 ,20, 30, 40, 50, 60];
// let mapArr = numArr.map((element)=> {
//     return element*10;
// })
// console.log(mapArr);

//chaining

let numArr = [10 ,20, 30, 40, 50, 60];


// //this is called chaining where we can chain any of these function in any order
// const answerArr = numArr
// .map( (item) => {return item*10} )
// .map( (item) => {return item+1})
// .filter( (item) => {return item>=401})

// console.log(answerArr);

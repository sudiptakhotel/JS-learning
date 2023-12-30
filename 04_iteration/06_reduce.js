//reduce function is an useful function to sum up elements in the array . Practical use - shopping cart to add cart items price in cart

//there is 2 parameter in reduce (accumulator , currentValue)
//currentValue - > current item in the array
//accumulator -> on going previous added price to add to the next item

//here we also need to mention the starting value to initialize accumulator

// let courseCart = [
//     {
//         itemName : "javascript",
//         price : 999
//     },
//     {
//         itemName : "python",
//         price : 599
//     },
//     {
//         itemName : "java",
//         price : 999
//     },
//     {
//         itemName : "data sceince",
//         price : 1299
//     },
//     {
//         itemName : "cpp",
//         price : 1999
//     }
// ]

// //lets add all of the course price and show our customer

// let priceToPay = courseCart.reduce( (acc , courseItem) => (acc + courseItem.price) , 0 );

// console.log(priceToPay);
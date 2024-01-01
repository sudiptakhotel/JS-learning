// nullish coalescing operator

//this is a very interesting operator that introduced recently in ES2020

//this operator gives a safety check when we get null or undefined value . So here it will not take null it will call randomValue()


 const randomValue = () => {
    return Math.floor(Math.random() * 10)
}
let val1 = null ?? randomValue()

console.log(val1);


//ternary opeartor

// const userName = "sudipta";
// (userName === "sudipta") ? console.log("yes") : console.log("NO");
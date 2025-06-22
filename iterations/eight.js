//Reduce

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval:${currval}`);
    
//     return acc + currval
// }, 3)

// console.log(myTotal);


const myTotal = myNums.reduce((acc,  curr) => acc+curr, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "py course",
        price: 999
    },
    {
        itemname: " mobile dev course",
        price: 5999
    },
    {
        itemname: "data science course",
        price: 12999
    },
]

const pricetopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(pricetopay);

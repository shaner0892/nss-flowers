
// Manually add two objects to the array below.

const flowers = [
    {
        id: 1,
        color: "white",
        species: "rose",
        price: 0.90
    },
    {
        id: 2,
        color: "red",
        species: "tulip",
        price: 1.10
    }

]

const addFlower = (flowerObject) => {
    /*
        Write the correct code below to add the value of
        `flowerObject` to the `flowers` array.
    */
    flowers.push(flowerObject)

}


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code


    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */
    for (const flower of flowers) {
        if (flower.price >= 1.00) {
            findExpensiveFlowers += 
        }
    }
    expensiveFlowers.push(findExpensiveFlowers)


    return expensiveFlowers  // Do not change this code
}

// console.log(expensiveFlowers)


// **********  Do not touch this code  **********
const getFlowers = () => flowers
module.exports = {
    findExpensiveFlowers, addFlower, getFlowers
}
// **********  Do not touch this code  **********


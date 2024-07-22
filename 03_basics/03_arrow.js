const user = {
    username: "aman",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function one() {
//     let username = "aman"
//     console.log(this.username);
// }

// one()

// const one = function() {
//     let username = "aman"
//     console.log(this);
// }

// one()

// const one = () => {
//     let username = "aman"
//     console.log(this);
// }

// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2 
// }

// implicitly return 
// const addTwo = (num1, num2) => num1 + num2 

// const addTwo = (num1, num2) => ( num1 + num2 ) 

const addTwo = (num1, num2) => ({username: "aman"}) 

console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
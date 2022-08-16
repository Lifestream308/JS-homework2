// Exercise 1 
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let x in person3) {
    console.log( person3[x] + ", ")
  }


// Exercise 2 
function Person(name, age) {
    this.name = name
    this.age = age

    this.printInfo = (color) => {
        console.log('Name is ' + this.name + ', Age is ' + this.age + ', favorite color is ' + color + '.')
        return "Returned Value?"
    }
    this.addAge = (number) => {
        this.age += number
        console.log(this.name + ' is now ' + number + ' years older. Age ' + this.age + '.')
    }
}

let chris = new Person('Chris', 25)
let david = new Person('David', 32)

chris.printInfo('blue')
david.printInfo('green')

chris.addAge(3)

chris.printInfo('blue')

// Exercise 3
function myConsole(some) {
    console.log(some)
  }
  
  let myPromise = new Promise(function(Resolve, Reject) {
    let str = 'Wow string'
    
    if (str.length > 10) {
      Resolve("Big word");
    } else {
      Reject("Small Number");
    }
  });
  
  myPromise.then(
    function(value) {myConsole(value);},
    function(error) {myConsole(error);}
  );
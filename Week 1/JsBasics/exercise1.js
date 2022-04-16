///// Conditional Statements///////

let boughtTesla = true
const yearOfTeslaPurchase = 2016
let isUSCitizen = true
let currentYear = 2018

if (boughtTesla){

    if(isUSCitizen && currentYear - yearOfTeslaPurchase >= 4){

        console.log("would you like to upgrade")
    }
    else if(isUSCitizen && currentYear - yearOfTeslaPurchase < 4){
        console.log("are you satisfied with the car?")
    }
    else{
        console.log("would like to move to the US")

    }

} 
else{
    console.log("are you interested in buying one ?")
}


 ////// Arrays ///////
 const numbers = [1,2,3,4,5,6,7,8,9,10]
 numbers.splice(1, 2)
 numbers.splice(3, 1,1)
 numbers.splice(numbers.length-4)
 numbers.splice(0,0,0)

 console.log(numbers)


/////// Objects///////
// let p1 = {
//     name: "Robert",
//     age: "24",
//     city:"beer sheva"
//   }
// let p2 = {
//     name: "Jill",
//     age: "24",
//     city:" sheva"
//   }
// if(p1.age==p2.age&&p1.city==p2.city){
//     console.log("Jill wanted to date Robert")
// }else if(p1.age==p2.age&&!(p1.city==p2.city)){
//     console.log("Jill wanted to date Robert, but couldn’t")
// }  

// let library = {
//     books: [book={title:"A Dance With Dragons",author:"Martin"}]
//   }
//   console.log(library.books[0])
//   console.log(p1)



let a = 3
let c = 0
let b = a
b = a
c = a
b = c
a = b
console.log(a)
console.log(b)
console.log(c)




//////////////////////////////////
const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true ,
    fridge: {
        price: 500,
        works: true,
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}


if(kitchen.hasOven&&kitchen.fridge.works){
    console.log('Geraldine’s raddish expired '+(date-kitchen.fridge.items[1].expiryDate)+'. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in')
}else if(!kitchen.hasOven&&kitchen.fridge.works){
    console.log('Geraldine’s raddish expired '+(date-kitchen.fridge.items[1].expiryDate)+'. Weird, considering her fridge works. Too bad she doesn’t have an oven to cook the raddish in')
}else if(kitchen.hasOven&&!kitchen.fridge.works){
    console.log('Geraldine’s raddish expired '+(date-kitchen.fridge.items[1].expiryDate)+'. Probably because her fridge doesn’t work. Luckily, she has an oven to cook the raddish in. And she’ll have to pay '+kitchen.fridge.price+' to fix the fridge')
}







///////// Loops //////////  
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
for(let personIndex in names){
    person={
        name:names[personIndex],
        age:ages[personIndex]
    }
    people.push(person)
}
// console.log(people)

// const posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
//   ]
// console.log(posts) 
// for(let post of posts){
//     if(post.id==2){
//         posts.splice(post.id-1,1)
//     }
// } 
// console.log(posts) 

const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]
// console.log(posts[1])  
for(let post of posts){
    if(post.id==2){
        for(let comment of post.comments){
            if(comment.id==3){
                post.comments.splice(comment.id-1,1)

            }
        }
    }
}  
// console.log(posts[1]) 
const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }
objArr=Object.keys(dictionary)  
for(let letter of objArr){
    console.log('Words that begin with ' + letter)
    for(let word of dictionary[letter]){
        console.log(word)
    }
}
let x=""
console.log(x)

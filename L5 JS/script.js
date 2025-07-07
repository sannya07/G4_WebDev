// console.log("SCRIPT")
// function greet(welcomeMessage, byMessage){
//     console.log(welcomeMessage+" "+this.studentName+ " is a "+this.gender+" student"+" "+byMessage)
// }

// const student1={
//     studentName:"Sanya",
//     gender:"female"
// }

// const student2={
//     studentName:"Kartik",
//     gender:"male"
// }

// //call -> immediate invoking
// greet.call(student2, "Good Morning","Good night");
// greet.call(student1, "hi","bye bye");

// // bind -> returns a function so we have to store it somewhere
// const greetKartik=greet.bind(student2, "Good Morning","Good night");
// const greetSanya=greet.bind(student1, "hi","bye bye");

// greetKartik();
// greetSanya();

// // apply
// greet.apply(student1,["hi","bye"]);


// function sumOfThree(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

// console.log(sumOfThree(10)(20)(30));

// // choose bread-> garlic bread? multigrain
// //  which patty do you want?
// //  with cheese or without?

// function chooseBread(bread){
//     return function(patty){
//         return function(cheese){
//             console.log(bread+" "+patty+" "+cheese);
//         }
//     }
// }
// chooseBread("multigrain")("chicken")("cheddar")



// console.log("SCRIPT END")


// event bubbling
const grandparent=document.getElementById("grandparent")
const parent=document.getElementById("parent")
const child=document.getElementById("child")

grandparent.addEventListener("click",()=>{
    console.log("grandparent clicked")
})

parent.addEventListener("click",()=>{
    console.log("parent clicked")
})

child.addEventListener("click",()=>{
    console.log("child clicked")
})




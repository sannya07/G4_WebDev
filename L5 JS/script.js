console.log("SCRIPT")
function greet(welcomeMessage, byMessage){
    console.log(welcomeMessage+" "+this.studentName+ " is a "+this.gender+" student"+" "+byMessage)
}

const student1={
    studentName:"Sanya",
    gender:"female"
}

const student2={
    studentName:"Kartik",
    gender:"male"
}

//call -> immediate invoking
greet.call(student2, "Good Morning","Good night");
greet.call(student1, "hi","bye bye");

// bind -> returns a function so we have to store it somewhere
const greetKartik=greet.bind(student2, "Good Morning","Good night");
const greetSanya=greet.bind(student1, "hi","bye bye");

greetKartik();
greetSanya();

// apply
greet.apply(student1,["hi","bye"]);
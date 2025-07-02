console.log('hello world')

var a=123; //this will be undefined in GEC
console.log(a);

function abc(){ //function abc in GEC
    console.log('this is function abc')
    function hgf(){
        console.log('this is function hgf')
    }
    hgf();
}
abc();
def(); //this works due to phase 1 phase 2 in which js operates
// for a function an execution context is generated
function def(){
    console.log('this is function def')
}
var b=300; //undefined in GEC
console.log(b)

// arrow function

// xyz(); //this will give error as xyz is not a function it is a named function . It will have undefined in GEC
// var xyz=()=>{
//     console.log('this is xyz')
// }

// console.log(b); 
// let b=300; //this will be in local scope and will have value undefined in GCC
// this will give reference error


function x(){
    var first=100;
    var second=200;
    var third=300;
    // console.log(d); //this will guve error
    function y(){
        var d=400;
        // z();
        function z(){
            console.log(first);
            console.log(second);
            console.log(third);
            console.log(d);
        }
        z();
    }
    y();
}
x();

for(var i=0;i<=5;i++){
    // console.log(i);
    setTimeout(()=>{
        console.log(i);
    },2000)
    // this prints 6 , 6 times
    // as for loop is sync
}

for(let i=0;i<=5;i++){
    // console.log(i);
    setTimeout(()=>{
        console.log(i);
    },2000)
    //this prints 0-5 as let creates local scope for each value of i
    // as for loop is sync
}

for(var i=0;i<=5;i++){
    function closure(i){
        setTimeout(()=>{
            console.log(i);
        },2000)
    }
    closure(i);
}

function nhof(){
    console.log('this is not a higher order function');
}
function hof(nhof){
    nhof();
    console.log('this is a higher order function');
}
hof(nhof);




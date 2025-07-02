// console.log("SCRIPT START")


// // setTimeout is by default async

// // setTimeout(()=>{
// //     console.log("I AM GOING TO RESTAURANT");
// // },4000)

// // setTimeout(()=>{
// //     console.log("I AM CHECKING THE MENU");
// // },3000)


// function walkInRestaurant(cb){
//     console.log('I am walking inside');
//     setTimeout(cb,3000)
// }

// function menuCheck(cb){
//     console.log('I am checking the menu');
//     setTimeout(cb,2000)
// }

// function foodOrder(cb){
//     console.log('I am ordering food')
//     setTimeout(cb,6000)
// }
// function havingLunch(cb){
//     console.log('I am having food')
//     setTimeout(cb,8000)
// }
// function payBill(cb){
//     console.log('I am paying the bill')
//     setTimeout(cb,3000)
// }
// function walkOff(){
//     console.log('Bye bye going home')
// }


// //pyramid of doom

// walkInRestaurant(()=>{
//     menuCheck(()=>{
//         foodOrder(()=>{
//             havingLunch(()=>{
//                 payBill(()=>{
//                     walkOff();
//                 })
//             })
//         })
//     })
// });

// console.log("SCRIPT END")


// ARRAY OPERATIONS
let arr=[2,4,3,6,8,5];

// function doubleArrayVal(arr){
//     return arr.map((i)=>{
//         return i*2
//     })   
// }

// function doubleArrayVal(arr){
//     let output=[];
//     for(var i=0;i<arr.length;i++){
//         output.push(arr[i]*2);
//     }
//     return output;
// }

// const ans=doubleArrayVal(arr);
// console.log(ans);

Array.prototype.calculate=function(logic){
    let output=[];
    for(var i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}

function triple(x){
    return x*x*x;
}
const ans=arr.calculate(triple);
console.log(ans)





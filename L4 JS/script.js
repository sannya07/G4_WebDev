// const priyanshuPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('I GOT PLACED');
//         // reject('No PLACEMENT');
//     },2000)
// })

// console.log(priyanshuPromise);
// // returns promise result

// priyanshuPromise
// .then((res)=>{
//     console.log('Priyanshu got a salary of 1cr')
//     console.log(res)
//     return res
// })
// .then((res)=>{
//     console.log('partyyyyy')
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err);
// })


// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('I GOT PLACED 1');
//         // reject('No PLACEMENT');
//     },2000)
// })

// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('I GOT PLACED 2');
//         // reject('No PLACEMENT');
//     },3000)
// })

// const p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('I GOT PLACED 3');
//         // reject('No PLACEMENT');
//     },5000)
// })

// const p4=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve('I GOT PLACED 4');
//         reject('No PLACEMENT');
//     },4000)
// })

// // Promise apis are used for dashboard


// Promise.all([p1,p2,p3,p4]).then((res)=>console.log(res)).catch((err)=>console.log(err))
// // returns the result of all promises as one array of result if all get fulfilled

// Promise.allSettled([p1,p2,p3,p4]).then((res)=>console.log(res)).catch((err)=>console.log(err))
// // this shows the status of all promises as well as the outout result array
// // even if one of the promises does not get fulfilled then it returns the reject statement as well as shows status

// Promise.any([p1,p2,p3,p4]).then((res)=>console.log(res)).catch((err)=>console.log(err));
// //this returns that one promise which is resolved and not rejected

// Promise.race([p1,p2,p3,p4]).then((res)=>console.log(res)).catch((err)=>console.log(err))




// const pi=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('HIOOOOOOO')
//     },2000)
// })

// async function checkHello(){
//     const check=await pi;
//     console.log(check);
// }
// checkHello()

// async function fetchProducts(){
//     try{
//         const products=await fetch('https://dummyjson.com/products')
//         const data=await products.json()
//         console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }

// fetchProducts()

async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const productList = document.getElementById("product-list");
        data.products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.innerHTML = 
            `<h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <hr/>`;
            productList.appendChild(productDiv);
        });

    } catch (err) {
        console.error("Error fetching products:", err);
    }
}

fetchProducts();









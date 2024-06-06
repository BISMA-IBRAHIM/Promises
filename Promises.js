// function addressMaker(address){
//     const {city , state} = address;
//     const newAddress = {
//         city,
//         state,
//         country: 'Pakistan'
//     };
//     console.log(`${newAddress.city}, ${newAddress.state},${newAddress.country}`);
// }

// addressMaker({city: 'Pakistan' , state:'sindh'});



// for of loop 
// let incomes = [3400,4900,75000];
// let total = 0;

// for (const income of incomes){
//     console.log(income);
//     total += income;
// }


//example 
// let fullname = "muhammad";
// for (const char of fullname){
//     console.log(char);
// }



// PROMISES ----------
// const promiseOne = new Promise(function(resolve, reject)
// {
//     // Do an async task
//     // DB calls, crypto network
//     setTimeout(function(){
//         console.log('Async task is complete');
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("Promise is consumed");
// })

// const promiseTwo = new Promise (function (resolve,reject){
//     setTimeout (function(){
//         resolve({username : "bisma", email: "bismaibrahim500@gmail.com"})
//     }, 1000)
//     promiseTwo.then(function(user){
       
//     })
//     console.log(user);
//})






// const promiseThree = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         let error = false //true
//         if (!error){
//             resolve({username: "abch" , password: "123"})
//         }else{
//             reject('error :something went wrong')
//         }
//     },1000)
// })

// promiseThree.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username)=> {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>
// {
//     console.log("promise is either resolved or rejected ");
// });


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if (!error){
//             resolve({username: "javascript",password:"123"})
//         }else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumedPromiseFour(){
//     const response = await promiseFour 
//     console.log(response);
// }
// consumedPromiseFour()

// function walkdog(){
//     return new Promise ((resolve,reject) =>{
//         setTimeout(() => {
//             const dogwalked = true;
//             if(dogwalked){
//                 resolve("you walk a dog ");
//             }else{
//                 reject("you did'nt walked the dog ");
//             }
            
//         }, 1500);
//     })
// }


//     let youCanDoIt= new Promise (function(resolve,reject){
//     setTimeout(() => {
//         const youCanDoIt =false;
//         if(youCanDoIt){
//             resolve();
//         }else{
//             reject();
//         }

//     },100);
// })

// youCanDoIt.then(function(){
//     console.log("'yes--- You Can Do It'")
// }).catch(function(){
//     console.log("'No---- You dont do this")
// })



// The promise objects takes a callback
// function as a parameter which in turn two parameters (resolve,reject).The promise is either fulfiled or rejected 


let goodThingsTakesTime = function(){
    return new Promise(function(resolve,reject){
        resolve("yesss---good things takes time.")
    })
}


let practiceMakesPerfection = function(msg){
    return new Promise (function(resolve,reject){
        resolve(msg+"Exactlyyyy Practice Makes Perfection")
    })
}

let GoForIt = function(msg){
    return new Promise(function(resolve,reject){
        resolve(msg+" If it is good, then go for it")
    })
}

goodThingsTakesTime ().then(function(result){
    return practiceMakesPerfection(result)
}).then(function(result){
    return GoForIt(result)
}).then(function(result){
    console.log("done!"+result)
})
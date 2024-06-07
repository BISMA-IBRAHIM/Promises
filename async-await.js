// let result = function(score){
//     return new Promise(function(resolve,reject){
//         console.log("Calculation results-----")
//         if(score>50)
//             resolve("Congratulation you did it")
//         else{
//             reject("You are failed to do this")
//         }
//     })
// }
// let grade = function(response){
//     return new Promise(function(resolve,reject){
//         console.log("calculating your Grade---")
//         resolve("Your grade is A"+response)
//     })
// }
// result(80).then(response=>{
//     console.log("result is recieved ")
//     return grade(response)
// }).then(finalgrade =>{
//     console.log(finalgrade)
// }).catch(error =>{
//     console.log(error)
// })



// async function calculateResult(){
//     try{
//         const response = await result (20 )
//         console.log("result recieved")
//         const finalgrade = await grade(response)
//         console.log(finalgrade)
//     }catch(error){
//         console.log(error)
        
//     }
// }
// calculateResult()

// function learnThis(){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             const learnThis = true;
//             if(learnThis){
//                 resolve("you can learn this.");
//             }else{
//                 reject("no you dont learn this");
//             }
//         },100)
//     })
// }




async function walkdog(){
    return new Promise((resolve,reject)=> {
        setTimeout(() =>{

            const dogwalked = true;
            if (dogwalked){
                resolve("You walked the dog ");
            }else{
                reject("You didnt walked the dog");
            }
        },1500)
    })
}

async function youPlayAsong(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {

            const youPlayAsong = true;
            if(youPlayAsong){
                resolve( " you  play a song");

            }else{
                reject("you didnt  play a song")
            }
        }, 1500)
    })
}
async function youEatThis(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{

            const youEatThis = true;
            if(youEatThis){
                resolve("YEs you eat this");

            }else{
                reject("no you didnt eat this");
            }
        },1500)
    })
}

async function doChores(){

    const walkdogResult = await walkdog();
    console.log(walkdogResult);

    const youPlayAsongResult = await youPlayAsong();
    console.log(youPlayAsongResult);
    
    const youEatThisResult = await youEatThis();
    console.log(youEatThisResult);

    console.log("You have done all the tasks");
}


doChores()
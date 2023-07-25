let promise = new Promise((resolve, reject) => {
    let a = 1 + 2;  //pending
    if(a == 2){
        resolve("Promise Fulfilled")   //fulfilled
    } else {
        reject("Promise not fulfilled")  //rejected
    }
}) 

promise.then((message) => {
    console.log(message + ", promise has passed!")  //ovaj message je poruka iz resolve/reject
                                                    //i ne mora ovako da se zove
                                                    //ali je ovako jasnije
}).catch((message) => {
    console.log(message + ", promise has failed!")
})


//then vraća promise
//catch vraća grešku
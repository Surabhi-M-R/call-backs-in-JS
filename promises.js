// promises is like a placeholder for the result of an asynchronous operation 
const pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(" hey, im here");
    },2000);
});

pr.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log(" thst's fine!");
})

const studentName=" sush";

const enrollStudent=(studentName)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const isSuccessful=Math.random()>0.4;
            if(isSuccessful){
                resolve(` Enrollment successful for ${studentName}`);
            }
            else{
                reject(` Enrollment failed for ${ studentName}.plese try again`);
            }
            
        },2000);
    });
};

enrollStudent(studentName)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Enrollment succesfully completed");
})

//<<< promise methods>>>
const promise1=new Promise((resolve)=>{
setTimeout(()=>{
    resolve(" first");
},5000)
});
const promise2=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(" second");
    },3000)
});
const promise3=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("third");
    },4000)
});

//<<<< Method One >>>>
Promise.all([promise1,promise3,promise2])
.then((values)=>{
    console.log(values);      
})
.catch((error)=>{
    console.log(error);
})                                            
.finally(()=>{
    console.log(" all promises are completed ");
})

//<<<< all settled>>>>>

Promise.allSettled([promise1,promise3,promise2])
.then((values)=>{
    console.log(values);      
})
.catch((error)=>{
    console.log(error);
})                                            
.finally(()=>{
    console.log(" all promises are completed ");
})
//<<< race>>>>>
Promise.race([promise1,promise3,promise2])
.then((values)=>{
    console.log(values);      
})
.catch((error)=>{
    console.log(error);
})                                            
.finally(()=>{
    console.log(" all promises are completed ");
}) 
//async wait>>promise chains>>callback hell
//<<<<<asynchronous programming>>>>>>
console.log(" one");
console.log(" two");
function hello(){
    console.log("three");
}
setTimeout(hello,9000);// timeout


    
setTimeout(() => {
    console.log(" four");
}, 4000);

console.log(" five");
console.log(" six");
//<<< call back function>>>>>

function product(a,b,c){
    return a*b*c;

}
function fun(x,y){
    let a=x(2,5,4);
    console.log(a-y);
}
fun(product,7);

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);

}
calculator(1,2,sum);

//set timer for each second
for(let i=1;i<=10;i++){
    setTimeout(()=>{
        console.log(i);
    },i*1000);
}
function getData(dataID,getNextData){
    setTimeout(()=>{
        console.log("data",dataID);
        if(getNextData){
            getNextData();
        }
    },2000);
}
// <<<<callBack hell>> nested call backs stacked below another forming a pyramid structure .(pyramid of doom); this type of programming difficult to understand(pyramid of doom);
getData(1,()=>{
    console.log(" getting data 2......")
    getData(2,()=>{
        console.log(" getting data 3......")
        getData(3,()=>{
            console.log(" getting data 4......")
            getData(4);
        })
    });
});

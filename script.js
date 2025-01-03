let DATA = "Secret Info"
class User {
    constructor(name , email) {
        this.name = name;
        this.email = email;

    }
    viewData() {
        console.log(DATA)
    }
}

class admin extends User {
    constructor(name , email) {
        super(name , email);
    }
    editData() {
        DATA = "New Secret Info"
    }
}

let student1 = new User("Amit", "Amitmittal@gmail.com");
let student2 = new User("Abhishake", "Abhimittal007@gmail.com");
let student3 = new User("Vivek", "VivuThakur@gmail.com");
let student4 = new User("Yash", "ykgamer002@gmail.com");
let student5 = new User("Aarti" , "aartiyash@gmail.com");

let Admin1 = new admin("Admin" , "admin@gmail.com");


// try catch

let a = 5;
let b = 6;
let c = 7;
console.log(a);
console.log(b);
console.log(a+b+c);
console.log(a*b*c);
console.log(a-b-c);
console.log(a+b*c);
console.log(a*b+c);
try {
    console.log(a+b+c+d);
} catch (error) {
    console.log(error);
};

console.log(a+b+c);


// chapter 12 callback, promises and async await =====>

    console.log("One");
    console.log("Two");
    console.log("Three");
    console.log("Four");

    // set Time Out **


    setTimeout(() => {
    console.log("ClickMe");
    }, 10000);

    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);

    // calculator 

    function sum (a , b){
        console.log(a+b);
    }

    function calCulator (a , b , sum) {
        sum(a , b);
    }

    calCulator(5 , 7 , sum)

// CallBack Hell 
// nesting

let age = 101;
if(age>=18) {
    if(age<=60){
        console.log("Middle");
    }
    if(age>=100){
        console.log("Super Senior")
    }
    else{
        console.log("Senior")
    }
}
else{
    console.log("child")
}

function getData(dataId) {
   return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log("Data" , dataId);
            resolve("Sucsess")
        }, 5000);
    });
}

getData(1118209).then((res) =>{
    return getData(251198)
    
    }).then ((res)=>{
        console.log(res)
    })

getData(1, () => {
    console.log("getting data 2.......!")
    getData(2 , () => {
        console.log("getting data 3.......!")
        getData(3 , () => {
            console.log("getting data 4.......!")
            getData(4)
        })
    })
});

// promises**

// let promise = new Promise((resolve,reject) =>{
//     console.log("Khushi Is A Gadhi")
//     resolve("Yess She Is A Gadhi")
// })

// let promises = new Promise((resolve,reject) =>{
//     console.log("Khushi Is A Gadhi")
//     reject(" She Is Not A Gadhi")
// })

// const getPromise = () => {
//    return new Promise((resolve , reject) => {
//         console.log("I Am A Promise");
//         resolve("Success")
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise Done!" , res);
// });

// promise.catch((error) => {
//     console.log("error Coming!" , error);
// });

function asyncFunc() {
    return new Promise((resolve , reject) => {
        setTimeout(() => { console.log("secret Data");
            resolve("Success")
        }, 4000);
               
    });
};

function asyncFunc1() {
    return new Promise((resolve , reject) => {
        setTimeout(() => { console.log("Most secret Data");
            resolve("Success")
        }, 4000);
               
    });

};  
console.log("fetching secret data")
asyncFunc().then((res) => {
console.log("fetching secret data..........");
asyncFunc1().then((res) => {
});
});

// async-await

function api() {
  return new Promise((resolve , reject) =>{
   setTimeout(() => {
    console.log("Weather Data");
    resolve(200);
   }, 2000);
   });
}

async function getWeatherData() {
  await  api();
   await api();
}


function getDatas(dataId) {
    return new Promise ((resolve,reject) => {
         setTimeout(() => {
             console.log("Data" , dataId);
             resolve("Sucsess")
         }, 2000);
     });
 }

 (async function () {
    console.log("getting data 1.......!")
    await getDatas(1);
    console.log("getting data 2.......!")
    await getDatas(2);
    console.log("getting data 3.......!")
    await getDatas(3);
    console.log("getting data 4.......!")
    await getDatas(4);
    console.log("getting data 5.......!")
    await getDatas(5);
    console.log("getting data 6.......!")
    await getDatas(6);
    console.log("getting data 7.......!")
    await getDatas(7);
    console.log("getting data 8.......!")
    await getDatas(8);
    console.log("getting data 9.......!")
    await getDatas(9);
    console.log("getting data 10.......!")
    await getDatas(10);
    console.log("fetching more data.......!")
 })();
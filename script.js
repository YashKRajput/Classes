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

function getData(dataId , getNextData) {
   return new Promise ((resolve,reject) => {
        setTimeout(() => {
            // console.log("Data" , dataId);
            // resolve("Sucsess")
            reject("error!")
            if(getNextData) {
                getNextData();
            }
        }, 3000);
    });
};

// getData(1, () => {
//     getData(2 , () => {
//         getData(3 , () => {
//             getData(4)
//         })
//     })
// });

// promises**

// let promise = new Promise((resolve,reject) =>{
//     console.log("Khushi Is A Gadhi")
//     resolve("Yess She Is A Gadhi")
// })

// let promises = new Promise((resolve,reject) =>{
//     console.log("Khushi Is A Gadhi")
//     reject(" She Is Not A Gadhi")
// })

const getPromise = () => {
   return new Promise((resolve , reject) => {
        console.log("I Am A Promise");
        resolve("Success")
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("Promise Done!" , res);
});

promise.catch((error) => {
    console.log("error Coming!" , error);
});
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

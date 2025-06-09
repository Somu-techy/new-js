// singleton objects or constructor

// const tinderuser = new Object();// singleton object
const tinderuser = {} // non-singleton object

 tinderuser.id = "123abc"
 tinderuser.name = "Somu"
 tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser = {
    email : "some@gamil.com",
    fullname: {
        userfullname: {
            firstname: "Somyadipta",
            lastname: "Bera"
        }
    }
} // nested object

console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = { obj1, obj2}// this is wrong way to merge objects

// const obj3 = Object.assign(obj1,obj2)

const obj3 = {...obj1,...obj2}// we will use this syntax most of the time to combine objects, spread operator
console.log(obj3);

const users = [
    {
        id: 1,
        email: "s@gmail.com",
    },
    {
        id: 2,
        email: "b@gmail.com",
    },
    {
        id: 3,
        email: "c@gmail.com",
    },
    {
        id: 4,
        email: "d@gmail.com",
    },
];
users[1].email
console.log(users[0].email);


console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));// ask if the property is in the object, returns boolean result

//##################################################

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Somu"
}

// object de-structure
const {courseInstructor: instructor} = course

console.log(instructor);

// ############################################### Object Literals ######################################################

const xyz = new Object();   //-> empty singleton object
const tinderUser= {}   //-> empty non-singleton object

tinderUser.id = '123abc'
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false



console.log(tinderUser); 

const regularUser = {
    email: 'some@gmail.com',
    fullName: {
        userFullName: {
            firstName: 'Mayank',
            lastName:'Pradhan'
        }
    }
};

console.log(regularUser.fullName.userFullName.firstName);  //object inside object



//Merging of two object

const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'c', 4: 'd' };

// const obj3 = { obj1, obj2 };
// console.log(obj3);     //     { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }  => array wali problem

const obj3 = Object.assign(obj1, obj2); // here the value of obj1 is populated with obj3
console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj1);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }  both the values are same as obj1 is modified

// if we don't want our object to be modified then

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);    // empty object is given in assign function


// again we can use spread operator

const obj5 = { ...obj1, ...obj2 };
console.log(obj5);

const users = [
    {
        id: 1,
        email: "id@gmail.com"
    },
    {
        id: 1,
        email: "id@gmail.com"
    },
    {
        id: 1,
        email: "id@gmail.com"
    },
    {
        id: 1,
        email: "id@gmail.com"
    }
]

// when we take values from data base then the values we'll be given to us like above (array of objects)

users[1].email //->accessing data

console.log(tinderUser);

console.log(Object.keys(tinderUser));   // this will give us array of all the keys, present in object(important)
console.log(Object.values(tinderUser)); // this will return array of all the values, present in object
console.log(Object.entries(tinderUser)); //pair ki trah return karta hai keys and values ko lekin pair bhi array ki trah hi hota hai


console.log(tinderUser.hasOwnProperty('isLoggedIn')); //-> checks if the tinderUser contains the property 'isLoggedIn' or not



// ____________________________________________________ Destructuring ____________________________________________________________


const course={
    courseName: "Js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// let's say there are multiple usage of course instructor property from course is used inside our code the instead of doing .(dot operation) multiple times we simply extract those values from object and use it

const { courseInstructor: instructor } = course;     //we use this 

console.log(instructor);  
// ------------------------------------------------Dates----------------------------------------------------------------------------

// let myDate = new Date()
// console.log(myDate)  //2024-02-13T12:19:55.417Z
// console.log(myDate.toString()); //Tue Feb 13 2024 17:48:58 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()) //2024-02-13T12:19:29.827Z
// console.log(myDate.toJSON());  //2024-02-13T12:20:53.901Z


// let myCreatedDate = new Date(2024, 1, 14);
// console.log(myCreatedDate.toDateString()); //Wed Feb 14 2024
// console.log(myCreatedDate.toString());  //Wed Feb 14 2024 00:00:00 GMT+0530 (India Standard Time)


let myCreatedDate = new Date("2024-03-14");
console.log(myCreatedDate.toString()); //Thu Mar 14 2024 05:30:00 GMT+0530 (India Standard Time)
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); 
// console.log(myTimeStamp)  //in mili seconds
// console.log(myCreatedDate.getTime());  //in mili seconds

console.log(Math.floor(myTimeStamp / 1000));     // in seconds


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());

console.log((newDate.toLocaleString("default", {
    weekday: "long",
    day: "2-digit"
})));

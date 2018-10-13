// //Log to Console
// console.log('JS I am Comming');
// console.log(123);
// console.log(true);
// var greeting='Hello js';
// console.log(greeting);
// console.log([1,2,23,5]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});

// console.error('This is Some Error');
// console.clear();
// console.warn('This is Warn Message');
// console.time('hello');
// console.log('JS I am Comming');
// console.log('JS I am Comming');
// console.log('JS I am Comming');
// console.timeEnd('hello');

//var, let, const

// var name='Chanaka Sampath';
// console.log(name);
// name='AladinLabs';
// console.log(name);

// //init var
// var greeting;
// console.log(greeting);
// greeting='Hello';
// console.log(greeting);

// /*
//     letters, numbers, _, $ 
//     can not start with Number
// */

// //Multi Word vars
// var firstName='chanaka'; //camel Case
// var first_name='Chanaka'; //Underscore
// var FirstName='Chanaka';   //Pascal Case

// //LET
// let name='Chanaka Sampath';
// console.log(name);
// name='AladinLabs';
// console.log(name);

// //Const
// const name='Chanaka Sampath';
// console.log(name);
// //name='AladinLabs';  //connot reassign
// console.log(name);

//const greeting;

// const person ={
//     name:'Chanaka',
//     age: 24 
// }

// person.name="AladinLabs";

// console.log(person);

// const num=[1,2,3,4,5];
// num.push(6);

// //const num=[1,2,3,4,5, 6]; //cannot

// console.log(num);

const name='Chanaka';
const age=24;
const job='Web Developer';
const city='NUgegoda';
let html;

//without temmplate string (es5)
html= '<ul><li>Name : '+name+'</li><li>Age : '+age+'</li><li>Job : '+job+'</li><li>City : '+city+'</li></ul>';

html= '<ul>'+
        '<li>Name : '+name+'</li>'+
        '<li>Age : '+age+'</li>'+
        '<li>Job : '+job+'</li>'+
        '<li>City : '+city+'</li>'+
    '</ul>';

function hello(){
    return 'hello';
}

//with template String (es6)
html=`
    <ul>
        <li>Name : ${name} </li>
        <li>Age : ${age} </li>
        <li>Job : ${job}</li>
        <li>City : ${city} </li>
        <li>${2+2} </li>
        <li>${hello()} </li>
        <li>${age>30? 'Over 30' : 'Under 30'} </li>
    </ul>
    `


document.body.innerHTML = html;
// let name={
//     firstname:'moahmmed',
//     lastname:'razik',
//     printfullName:function(){
//         console.log(this.firstname  + ' ' + this.lastname);
//     }

    

// }
// name.printfullName();

// let name2={
//     firstname:'mohammed',
//     lastname:'basim',

// }
// name.printfullName.call(name2);

// const mypromise= new Promise((resolve,reject)=>{
//     let num = prompt('enter the number')
//     if(num%2==0){
//         resolve('even');
//     }
//     else{
//         reject('odd');
//     }
// })
// mypromise.then(
//     res=>{
//         console.log(res);
//     }

// )
// .catch(
//     err=>{
//         console.log(err);
//     }
// )

// function add(num1,num2){
//     return new Promise((resolve,reject)=>{
//         let sum=num1+num2;
//         resolve(sum)
//     });
// }
// add(6,7)
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error)
// })






////////////  JS //////////


//HOF//


// function hello(operators,a,b){
//     return operators(a,b);
// }
// function add(x,y){
//     return x+y;
// }
// console.log(hello(add,5,7))


//returning  a  function eg: HOF//


// function greet(hello){
//     return function(name){
//         console.log(hello + " " + name);
//     }
// } 
// const hi=greet('hello');
// hi('ri');

//FUNCTION COMPOSITION//

// function add(x){
//     return x+3;
// }

// function multi(x){
//     return x*3;
// }
// const output=multi(add(4));
// console.log(output);



//CLOSURE//


// function a(b){
//     b()
//     console.log('hi');
//     function b(){
//         console.log('haloo');
//     }
// }
// a();


//HOISTING//

// add();
// function add(){

// }

//CALL//

// const person={
//     name:'razik'
// };
// function greet(message){
//     console.log(message + ' '+ this.name)
// }
// greet.call(person,'hi');


//APPLY//

// const person ={
//     name:'razik'
// };
// function greet(message){
//     console.log(message + this.name)
// }
// greet.apply(person,['hello']);



//BIND//

// const person={
//     name:'razik'
// };
// function greet(message){
//     console.log(message + this.name);
// }
// const hi=greet.bind(person)
// hi('hii');

//STIRNG LENGHT//

// const str='hiiii';
// console.log(str.length);

//UPPER CASE,LOWERCASE//
// const name='iiihhFIJGIO'
// const hi= name.toLowerCase()
// console.log(hi);

//PAD  STRING METHOD//

// const a = '123'
// const b= a.padStart(5,'0')
// console.log(b);

//CHARTAT STRING METHODsdqws   //   

// const a='hiii hello';
// const b= a.charAt(7);
// console.log(b);

//SPLIT IN STRING METHOD//

// const a ='razik,the';
// const b=a.split(',');
// console.log(b);

//CONCAT STRING METHOD//

// const a='hoiii'
// const b='razik'
// const out= a.concat(b);
// console.log(out);

//SUBSTRING IN STRING METHOD//

// const a='hiiiii hello'
// const b=a.substring(7,10)
// console.log(b);


//ARRAY METHODS MAAAAAPPPPP//

// const a=[1,2,3,4,5,6];
// const output=a.map(function(num){
//     return num*4;
// })
// console.log(output);

//FILTER IN ARRAY METHOD//

// const a=[1,2,3,4,5];
// const output=a.filter(function(num){
//     return num%2;
// })
// console.log(output);

//REDUCE IN ARRAY METHOD//

// const a=[1,2,3,4];
// const output=a.reduce(function(acc,curr){

//     return acc+curr;
// },0);
// console.log(output);

//SUM WITH REDUCE//

// const a=[1,2,3,4];
// const b=a.reduce(function(acc,curr){
//     let sum=curr+acc;
//     return sum;
// },0)
// console.log(b);

//FIND IN ARRAY METHOD//

// const a=[1,2,3,4];
// const output=a.find(function(num){
//     return num>1;
// });
// console.log(output);

//SORT IN ARRAY METHOD//

// const fruits=[3,4,1,2]
// const b=fruits.sort();
// console.log(b);

//OBJECT FREEZE//

// const obj={
//     name:'razik',
//     age :14
// }
// Object.freeze(obj);

// obj.name='raz';
// console.log(obj);

//CALL BACK//

// function fetch(callback){
//     setTimeout(()=>{
//         const a={name:'razik',age:18}
//         callback(a);
//     },4000)
// }
// function output(a){
//     console.log('the answer is:',a);
// }
// fetch(output);

//TERNARY OPERATOR//

// const age=15;
// const b=age>=18?'you are adult':'you are minor';
// console.log(b);

//TEMPLAATE LITERALS//
 
// const a='razik'
// const b=18
// const output=`I am ${a} and I am ${b} years old`
// console.log(output);

//DEFAULT PARAMETER//

// function a(name='any'){
//     console.log(`hello ${name}`);
// }
// a();
// a('razik');

//CURRYING//

// function a(x,y){
//     return x+y;
// }
// function b(x){
//     return function(y){
//         return x+y;
//     }
// }
// const c=b(5)
// console.log(c(8));

//TYPE CASTING EXPLICIT//

// const a=10;
// const b=String(a);
// console.log(typeof b);

// IMPLICIT//

// const a=10;
// const b='the num is '+a
// console.log(typeof b);

//ARROW FUNCTION//

// const a=(x,y)=>x+y;
// console.log(a(3,4));

//CLASS//

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     greet() {
//       console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//     }
//   }
  
//   const john = new Person('John', 30);
//   john.greet(); 
  
 //ASYNCHRONOUS//

// console.log('hi');

// setTimeout(()=>{
//     console.log('hello');
// },4000)
// console.log('heii');

//PROMISE.ALL//

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('promsie one finished'),1000)
// })

// const promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('promise two finished'),2000)
// })

// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('promise three finished'),3000)
// })

// Promise.all([promise1,promise2,promise3])
// .then(values=>{
//     console.log('all finished',values)
// })
// .catch(error=>{
//     console.log('no error',error)
// })

//PROMISE ALL SETTELED//

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('promise one finished'),1000)
// })
// const promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>reject('promise two rejected'),2000)
// })
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('promise three finished'),3000)
// })

// Promise.allSettled([promise1,promise2,promise3])
// .then(values=>{
//     console.log('all finished',values)
// });

//PROMISE.RACE//

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('promise one finished'),1000)
// })
// const promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>reject('promise two rejected'),2000)
// })
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('promise three finished'),3000)
// })

// Promise.race([promise1,promise2,promise3])
// .then(values=>{
//     console.log('all finished',values)
// })
// .catch(error=>{
//     console.log('one error',error)
// })

//FOREACH//

// const a=[1,2,3,4];
// const out=a.map(function (num){
//     console.log(num*2);
// })

//SUM REDUCE IN OBJECT//
// const a=[{a:2,b:3},{a:2,b:3} ,{a:2,b:3}];

// const output=a.reduce((acc,curr)=>{
//     return acc=curr.b+acc,acc=curr.a+acc
// },0)
// console.log(output)

//LARGEST STRING IN REDUCE//

// const a=['apple','orange','banana'];
// const b=a.reduce((acc,curr)=>{
//     if(curr.length<acc.length){
//         return acc;
//     }
//     else{
//         return curr;
//     }
// });
// console.log(b);

//FOR OF//

// const a=[1,2,3,4];
// for(const value of a){
//     console.log(value)
// }

//FOR IN//

// const a={a:1,b:2,c:3}
// for(const key in a){
//     console.log(key)
// }

//PASS BY VALUE//

// function modifyValue(value) {
//     value = 10;
//   }
  
//   let x = 5;
//   modifyValue(x);
//   console.log(x); //OUTPUT=5//

   //PASS BY REFERENCE//

//   function modifyArray(array) {
//     array.push(4);
//   }
  
//   let arr = [1, 2, 3];
//   modifyArray(arr);
//   console.log(arr); // Output: [1, 2, 3, 4]
  
//UNDEFINED//

// let x;
// console.log(x);
  
//SPREAD OPERATOR//

// const a=[1,2,3,4];
// const n=[...a,5,6];
// console.log(n)

//OBJECT METHOD  SPREAD//

// const a={name:'razik',age:18}
// const b={...a,city:'malappuram'}
// console.log(b);

//REST OPERATOR//

// function sum(...numbers){
//    return numbers.reduce((acc,curr)=>acc+curr,0)
// }
// console.log(sum(1,2,34,5))

//SHALLOW COPY//

// const og={name:'razik',age:18}
// const shallowcopy={...og};
// shallowcopy.age=39

// console.log(shallowcopy);

//DEEP COPY//

// const a=[[1,2,3],[3,4,5]];
// const deepcopy=JSON.parse(JSON.stringify(a));
// deepcopy[0][0]=10;
// console.log(deepcopy);

//GENERATOR FUNCTION //

// function *genrator(){
//    yield 1;
//    yield 2;
//    yield 3;
// }
// const b=genrator();
// console.log(b.next())
// console.log(b.next())
// console.log(b.next())
// console.log(b.next())

//EVENT DELEGATION IN HTML//


//REMOVE NULL AND UNDEFINED FROM ARRAY//

// const arr=[1,2,3,null,4,undefined,5];
// const b=arr.filter(item=>item !== null && item !== undefined);
// console.log(b);

//REPLACE 4 WITH 40//

// const arr=[1,2,3,null,4,undefined,5]
// const b=arr.map(num=>{
//    if(num==4){
//       return 40;
//    }
//    else{
// return num;
//    }
// })
// console.log(b)


//SUM WTH PROMISE//


// function add(num1,num2){
//    return new Promise((resolve,rejrcct)=>{
//       let sum = num1+num2;
//       resolve(sum);
//    })
// }
// add(8,9)
// .then(result=>{
//    console.log(result);
// })
// .catch(error=>{
//    console.log(error)
// })


//EMPTY OBJECT//

// let obj={};
// let b=Object.keys(obj);
// console.log(b)

//FIND PERSON AGED LESS THAN 54//

// let objj = [
//    {name : 'a', age : 25},
//    {name : 'b', age : 67},
//    {name : 'c', age : 18},
//    {name : 'd', age : 54}
// ]
// const b=objj.filter((num)=>{
//    return num.age<=54
// })
// console.log(b);

//BITWISE AND//

// let result =5&3
// console.log(result);

//BITWISE OR//

// let result =5|3
// console.log(result);

//CALLBACK SUM//

// function fetch(num1,num2,callback){
// let sum = num1 +num2
// callback(sum)
// }
// function output(sum){
// console.log(sum)
// }
// fetch(12,2,output);

// DELTE DUPLICATE PRIJNT ONE TIME FULL//

// const arr=[1,2,3,4,4,5,5,3];
// const b=arr.filter((num,item)=>{
//    return arr.indexOf(num)===item
// })
// console.log(b);

//WTIH SET//

// const arr=[1,2,3,4,4,5,5,3];
// const b=new Set(arr);
// console.log(b);

//OBJECT SUM//

// const arr={a:1,b:2};
// let sum =0;
// for(const key in arr){
//    sum= sum+arr[key]

// }
// console.log(sum);

//MATH OPERATOR//

// let a=4.2;
// console.log(Math.round(a))

//MULTIPLE OF 5 WITH LOOP//

// for(let i=1;i<=20;i++){
//    let multiple=i*5;
//    console.log(multiple);
// }

      //EXTENDS KEYWORD//

// class Animal {
//    constructor(name) {
//        this.name = name;
//    }

//    speak() {
//        console.log(`${this.name} makes a sound.`);
//    }
// }

// class Dog extends Animal {
//    constructor(name, breed) {
//        super(name); // Call the parent class constructor
//        this.breed = breed;
//    }

//    speak() {
//        console.log(`${this.name} barks.`);
//    }
// }

// const dog = new Dog('Buddy', 'Labrador');
// console.log(dog.name); // Output: "Buddy"
// console.log(dog.breed); // Output: "Labrador"
// dog.speak(); // Output: "Buddy barks."

//RECURSION//

// function factorial(n) {
//    // Base case: if n is 0 or 1, return 1
//    if (n === 0 || n === 1) {
//        return 1;
//    }
//    // Recursive case: call factorial function with a smaller value of n
//    return n * factorial(n - 1);
// }
// // Example usage
// console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)

//VARIABLE SHADOWING//

// var x=10;

// function a(){
//    var x=20;
//    console.log(x);       //output 20;
// }
// a();
// console.log(x);         // output 10;

//NULLISH OPERATOR//

// const a=20;
// const b=' ';
// const c= null;
// const d= undefined;
// const e= 'helo';

// const result1=a?? 'default';
// const result2= b?? 'default';
// const result3= c?? 'default';
// const result4 = d?? 'default';
// const result5= e?? 'default';
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);

// OPTIONAL CHAINING//

// const user = {
//    name: 'John',
//    address: {
//        city: 'New York',
//        postalCode: '10001'
//    }
// };

// // Without optional chaining (may throw error if address is undefined)
// const city = user.address.city; // 'New York'

// // With optional chaining (returns undefined if address is undefined)
// const citySafe = user.address?.city; // 'New York'

// console.log(city);      // Output: 'New York'
// console.log(citySafe);  // Output: 'New York'

//IIFE//

// (function a(){
//    var x=10;
//    console.log(x);
// })();

//CLEAR INTERVAL//

// function a(){
//    console.log('hello');
// }
// const b=setInterval(a,1000);
// setTimeout(()=>{
//    clearInterval(b)`
//    console.log('poyko keynj')
// },5000)

//WEAK MAP//


// let weakMap = new WeakMap();
// let obj1 = {};
// let obj2 = {};
// weakMap.set(obj1, "value associated with obj1");
// console.log(weakMap.get(obj1)); // Output: "value associated with obj1"
// obj1 = null; // obj1 can now be garbage collected

//WEAK SET//

// let weakSet = new WeakSet();
// let obj3 = {};
// weakSet.add(obj3);
// console.log(weakSet.has(obj3)); // Output: true
// obj3 = null; // obj3 can now be garbage collected
// console.log(weakSet.has(obj3)); // Output: false

//FACTORIAL//

// function factorial(n){
//       if(n==0 || n==1){
//             return 1;
//       }
//       else{
//              return n*factorial(n-1)
//       }
// }
// console.log(factorial(5));

//PALINDROME//

// function a(b){
//       return b=b.split('').reverse().join('')
// }
// console.log(a('razik'));

//ASYNC AWAIT//

// function fetch(){
//       return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                   const data={message:'data fetched sucessfully'}
//                   resolve(data)
//             },3000)
//       })
// }
// async function output(){
//       try{
//             const data = await fetch()
//             console.log(data.message)
//       }
//       catch(error){
//             console.error(data.message)
//       }
// }
// output()

//OBJECT DESTRUCTURING//

// const a={
//       name:'razik',
//       age:18,
//       gender:'male',
//       city:'malappuram'
// }
// const {name,age,gender,city}=a;
// console.log(name);
// console.log(age);

// ARRAY DESTRUCTURING//

// const a=['red','green','blue'];
// const [firstcolor,secondcolor,thirdcolor]=a;
// console.log(secondcolor)

// BOTH WITH REST BAKKI OF EXAMPLE IN GPT//

// Object destructuring with default value and rest syntax
// const { firstName = 'Unknown', lastName, ...rest } = person;
// console.log(firstName); // Output: John
// console.log(lastName);  // Output: Doe
// console.log(rest);      // Output: { age: 30, country: 'USA' }

// // Array destructuring with default value and rest syntax
// const [primaryColor, secondaryColor = 'white', ...otherColors] = colors;
// console.log(primaryColor); // Output: red
// console.log(secondaryColor); // Output: green
// console.log(otherColors);  // Output: ['blue']


// SUM OF ARRAY IN OBJECT IN ARRAY//

// const ab=[{ab:[1,2,3,4,5]}]
// let sum=0;
// for(let i=0;i<ab[0].ab.length;i++){
//       sum=sum+ab[0].ab[i]
// }
// console.log(sum);

//FLAT MAP//

// const a=[1,2,34,5];
// const b=a.flatMap((num)=>{
//       return num*2
// })
// console.log(b);

//FLAT//

// const a=[1,2,[3,4],[5,[6,7]]]
// const b=a.flat();
// console.log(b);

//REMOVE ADJACENT ODD NUMBERS//

// function a(arr){
//       for(let i=0;i<arr.length;i++){
//             if(a[i]%2!==0 && a[i+1]%2!==0){
//                   arr.splice(i,1)
//             }
//       }
//       return arr;
// }
// const b=[1,2,3,4,5,3,7,8]
// console.log(a(b));

//OR//

// const a=[1,2,3,5,4,7];
// for(let i=0;i=a.length;i++){
//       if(a[i]%2!==0 && a[i+1]%2!==0){
//             a.splice(i,1)
//             console.log(a)
//       }
      
      
// }

//QUESTIOIN //

//  const a=[[{a:20}],[{a:80}]]
//  const b=a.flat().reduce((acc,curr)=>{
//        return acc+curr.a
//  },0)
//  console.log(b)


//TWO ARRAY MULTIPLICATION //

// let a=[1,2,3,4,5]
// let b=[4,5,6,7,8]
// const c=a.map((num,item)=>{
//       return num*b[item]
// })
// console.log(c)

//LARGEST NUMBER//

// let a=10;
// let b=1000;
// let c=9;
// const ab=a>b?a:b;
// const bc=ab>c?ab:c;
// console.log(bc);

//FIND THE MAX NUMBER IN AN ARRAY//

// function ab(arr){
//       let max=a[0]
//       for(let i=0;i<arr.length;i++){
//             if(arr[i]>max){
//                   max=arr[i]
//             }
//       }
//       return max;
// }
// const a=[1,2,3,4,9]
// console.log(ab(a))

//CALCULATE THE AVERAGE //

// function ab(arr){
//       let sum=0;
//       for(let i=0;i<arr.length;i++){
//             sum=sum+a[i]
//       }
//       return sum/arr.length
// }
// const a=[1,2,3,4,5,66]
// console.log(ab(a))

//COUNT EVEN NUMBERS IN AN ARRAY//

// function ab(arr){
//       let count=0;
//       for(let i=0;i<arr.length;i++){
//             if(arr[i]%2==0){
//                   count++;
//             }
//       }
//       return count;
// }
// const a=[1,2,3,4,5,5,6]
// console.log(ab(a))

//FIND THE INDEX OF SPECIFIC ELEMENT IN AN ARRAY//

// function ab(arr,target){
//       for(let i=0;i<arr.length;i++){
//             if(arr[i]==target){
//                   return i;
//             }
//       }
//       return -1;
// }   
// const a=[1,2,3,4,5,6]
// const target=4
// console.log(ab(a,target))           

//CHECK IF AN ARRAY CONTAINS GIVEN ELEMENT/

// function ab(arr,target){
//       for(let i=0;i<arr.length;i++){
//             if(arr[i]==target){
//                   return true;
//             }
//       }
//       return false;
// }
// const a=[1,2,3,4,5]
// const b=[99]
// console.log(ab(a,b))

//CALCULATE THE PRODUCT OF THE ARRAY//

// const a=[1,2,3,4,77]
// let multiple=1
// for(let i=0;i<a.length;i++){
//      multiple=multiple*a[i]
// }
// console.log(multiple)

//FIND THE LONGEST STRING  WITH LOOP//

// function ab(arr){
//       let longest=arr[0];
//       for(let i=0;i<arr.length;i++){
//             if(arr[i]>longest){
//                   longest=arr[i]
//             }
//       }
//       return longest;

// }
// const a=['kffjjs','sjfodosfshhflfsl','fjdhfo']
// console.log(ab(a))

//REVERSE AN STRING//

// function ab(arr){
//       let result=[]
//       for(let i=0;i<arr.length;i++){
//             reverse=arr[i].split('').reverse().join('')
//             result.push(reverse)
//       }
//       return result
// }
// const a=['hello','world']
// console.log(ab(a));

//COUNT HOW MANY THAT ELEMANTS HAD COME IN AN ARRAY//

// function ab(arr,target){
//       let count=0
//       for(let i=0;i<arr.length;i++){
//             if(arr[i]==target){
//                   count++;
//             }
//       }
//       return count;
// }
// const a=[1,2,2,2,2,3,4,4,55,5,2]
// const b=2;
// console.log(ab(a,b));

//SUM THE SQUARE OF NUMBERS IN AN ARRAY//

// function ab(arr){
//       let sum=0;
//       for(let i=0;i<arr.length;i++){
//             sum=sum+arr[i]*arr[i]
//       }
//       return sum;
// }
// const a=[1,2,3]
// console.log(ab(a));

//FIND UNIQUE NUMBERS IN AN ARRAY//

// function a(arr){
//       let result=[]
//       for(let i=0;i<arr.length;i++){
//             if(arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])){
//                   result.push(arr[i])
//             }
//       }
//       return result;
// }
// const ab=[1,2,3,4,4,5,5,5,3,2]
// console.log(a(ab))   

//SECOND LARGEST NUMBER//

// const arr = [8,1,2,3,7,5,9]
// const a=arr.sort((a,b)=>b-a)
// console.log(a[1])



const a=10

console.log('gyfhj'+typeof a)
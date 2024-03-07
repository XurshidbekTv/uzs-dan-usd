"use strict";

// let isim = "Hello World";
// // console.log(isim.substring(0,6));;
// console.log(isim.substr(0,3))

// const number=8.3;
// console.log(Math.round(number));


// const i='13.8px';
// console.log(parseFloat(i));
// console.log(parseInt(i));

// function first(cb){
//     setTimeout(()=>{
//         console.log(1);
//         cb();
//     },1000);
// };
// function second(){
//     console.log(2);
// };
// first(second);

// function edu(subject, callback){
//     console.log(`helllo ${subject}`);
//     callback()
// };
// function j(){
//     console.log('jason file');
// }
// edu('xurshidbek',j);

// const theif={
//     jacket: "black",
//     height: 1.7,
//     colors:{
//       hair: "gray",
//       style: "curley",
//     },
//     howOut: function(){
//       console.log("devor orqaliy chiqib ketdi");
//     }
// }
// // theif.howOut();
// const {hair, style}=theif.colors;
// console.log(hair);
// console.log(style);

// // console.log(Object.keys(theif).length);
// let count=0;
// for(let key in theif){
// // if(theif[key]==='object'){
// //   for(let i in theif[i]){
// //     console.log(`${i} : ${theif[key][i]}`)
// //   }
// // }else{
// //   console.log( `${key}: ${theif[key]}`)

// // }
//  count++;
// }
// console.log(count);

// const theif={
//   height: 1.5,
//   color: "black",
//   style:{
//     aqli: "yoq",
//     farosati: "yoq",
//   }
// }
// for(let key in theif){
//   if(theif[key]===Object){
//     for(let i in theif[key][i]){
//       console.log(`${i}: ${theif[key][i]}`);
//     }
//   }else{
//     console.log(`${key}: ${theif[key]}`);
//   }
// }

//  let arr=[1,2,3,4,112,13];
//  arr.sort(jacket);
//  function jacket(a,b){
//     return a-b;
//  }
//  console.log(arr);
// arr.forEach(function(item , index, arr){
//     console.log(`${index}: ${item} lern to ${arr}`);
// })
// const series = prompt("Hello wats your name", "");
// const UzSeries = series.split(", ");
// console.log(UzSeries.join(''));

// const a={
//     x: 1,
//     y: 2,
// }
// const b=a;
// b.x=7;

// console.log(a);
// console.log(b)


// function objNusxa(obj){
//     let nusxaObj={};
//     for(let key in obj){
//         nusxaObj[key]=obj[key];
//     }
//     return nusxaObj;
// }
// const number={
//     x:3,
//     y:4,
//     z:{
//         a:3,
//         b:6,
//     }
// }
// let newNumber=objNusxa(number);
// newNumber.x=2;
// newNumber.z.a=9;
// console.log(number);
// console.log(newNumber);

// const number={
//     x:3,
//     y:4,
   
// }
// const raqam = {
//     z: 5,
// }

// const newNumber=Object.assign(number, raqam);
// console.log(newNumber);

// const arr=[1, 3, 4, 6];
// const newArr=arr.slice();
// newArr[1]="alula";
// console.log(arr);
// console.log(newArr)

// const ali=["akasi", "ukasi"];
// const vali=["jiyani"];
// const mixQarindosh = [...ali , ...vali];
// console.log(mixQarindosh)

// let arr=[1, 3, 5];
// let jus=[...arr];
// console.log(jus);

// function loger(x, y, z){
//     console.log(x+y+z);
// }
// loger(...arr);

// const obj={
//     x:2,
//     y:3,
// }
// const newObj = {...obj};
// console.log(newObj);

// const newName="xurshidbek";
// const str = new String(newName);
// console.log(newName);
// console.log(str);

// const car={
//     motor:"x",
//     isAirbag:true,
//     color:"red",
//     isSpead: function(){
//         console.log(360)
//     }
// }
// const gm={
//     isAirbag: false,
// }

// // gm.__proto__=car;
// // console.log(gm.is.color)
// // gm.isSpead()

// // Object.setPrototypeOf(gm, car)
// // console.log(gm)

// const bmw = Object.create(car);
// console.log(bmw);

// to String
// 1-)
// console.log(typeof string(2));

// 2-)
// console.log("xurshidbek"+24);
// const jason=45;
// console.log("hello"+jason)
// console.log(typeof Number('5'));
// console.log(typeof +"7");
// console.log(typeof parseInt("5"));
// const jason = document.querySelector('.jason');
// // jason.remove()
// const my = document.querySelectorAll('.my');
// // my[1].remove()
// const circle=document.createElement('div');
// circle.classList.add('my');
// jason.append('');
// my.insertAdjacentHTML=('beforeend', 'ahdohaoh')
// const jason = document.querySelector('.jason');


// const seriesDB ={
//   series : [
//         'hello',
//         'hi',
//         'jason',
//        , 'saolom'
//     ]
// }
// jason.innerHTML='';

// seriesDB.series.forEach((key, index)=>{
//     jason.innerHTML += `<li>${key}  ${index}</li> `
// })
// console.log(document.head)
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// const box = document.querySelector('div');
// const btn = document.querySelector('button');

// let a, b;
// a =box.offsetHeight;
// b =box.scrollHeight;
// console.log(a);
// console.log(b);
// btn.addEventListener('click',()=>{
//     box.style.height=box.scrollHeight+'px';
// });
// a=box.scrollTop;
// console.log(a);

// function Car(name, color, mph){
//     this.name=name;
//     this.color=color;
//     this.mph=mph;
//     this.airbag=true;
//     this.sped=function(){
//         console.log(`This ${this.name} car ${this.mph}`);
//     }
// }
// Car.prototype.seyHello=function(){
//     console.log(`hello name ${this.name} costsa`);
// }
// const bmw=new Car("mesedes", "red", "3");
// const mers=new Car("bmww", "black", "2");
// console.log(bmw);
// console.log(mers);

//Odiy function yaratilganida context ya'ni this har doim window global obketiga teng bo'ladi;

// contex this - har  doim nimagadir qaram (osiladi);
// function logger(a, b){
//     console.log(this);
//     function log(){
//         console.log(this);
//         return a + b;
//     }
//      log();
// }
// logger(2,4);


// const obj={
//     a:2,
//     b:45,
//     sun:function(){
//         function akasi(){
//             console.log(this)
//         }
//         akasi()
//     }
// }
// obj.sun()

// function taka(name, color){
//     this.name= name;
//     this.color= color;
//     this.isAirbag=true;
// }

// const bmw= new taka("maymun", "moykiriyasfalt");
// console.log(bmw);


// -> call, apply

// function logger(speed){
//     console.log(this)
//     console.log(this.name)
//     console.log(`hello ${this.name} is ${this.black} va ${speed}`)
// }

// const taka={
//     name:"bmw",
//     color:"black"
// }

// logger.call(taka, 4550)
// logger.apply(taka, [1100])

//--> bind
// function jon(number){
//     return this*number
// }

// const steep2=jon.bind(2);
// console.log(steep2(12));
// console.log(steep2(4));

// const btn=document.querySelector('button');
// btn.addEventListener('click',(a)=>{
//     a.target.style.width='400px'
// });

// const jas={
//     x:12,
//     y:2,
//     sey:function(){
//         function culon(){
//             console.log(this)
//         }
//         culon();
//     }
// }
// console.log(jas)

// class Car{
//  constructor(name, color, speed){
//     this.name=name;
//     this.color=color;
//     this.speed=speed;
//  }
//  clacSpeed(){
//     return this.speed*100;
//  }
// }

// class Spark extends Car{
//     constructor(name, color, speed, isAirbag, extraBalon){
//         super(name, color, speed);
//         this.isAirbag=isAirbag;
//         this.extraBalon=extraBalon;
//     }
//     logger(){
//         console.log(`This car name ${this.name} is color ${this.color} max-speed ${this.speed} ayirbag ${this.isAirbag} balon ${this.extraBalon}`)
//     }
// }
// const ali=new Spark("Spark", "white", "12", false, 5);
// console.log(ali.logger())
// const mers= new Car("mersedes", "black", 10);
// const bmw= new Car("bmw", "red",40);

// console.log(mers.clacSpeed());
// console.log(bmw.clacSpeed());

// function logger(a, b, ...reset){
//     console.log(a)
//     console.log(b);
//     reset.forEach(element => {
//         console.log(element);
//     });
// }

// logger(1,3,4,5,6,7,2,4);

// function ali(a, b=8){
//     console.log(a-b);
// }
// ali(2);

// const obj={
//     a:"ali",
//     b:5,

// }
// const objJson= JSON.stringify(obj);
// const jsomReturn=JSON.parse(objJson)
// console.log(objJson)
// console.log(jsomReturn)

//JSON.stringfy- obektdan Json farmatga otkazadi
//JSON.parse -JSon formatdan obektga otkazadi
// const ali={
//     a:"jojjoba",
//     b:89,
//     non:{
//         c:10,
//         g:5,
//     }
// }
// const culon=JSON.parse(JSON.stringify(ali));
// culon.non.c=1;
// console.log(ali);
// console.log(culon);-


const usd=document.querySelector("#usd"),
      uzs=document.querySelector("#uzs");


uzs.addEventListener('input',(e)=>{
    const request= new XMLHttpRequest();

    request.open('GET', 'css/current.json');
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', ()=>{
        if(request.readyState==4 && request.status==200){
            console.log(request.response)
            const data = JSON.parse(request.response);
            usd.value=(+uzs.value / data.current.usd).toFixed(2)
        }else{
            usd.value='Something went wrong'
        }   
    })
})
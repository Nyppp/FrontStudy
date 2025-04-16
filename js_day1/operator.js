// 실습 1 산술연산자
let a = 7;
let b = 2;

console.log(a+b); //9
console.log(a%b); //1
console.log(a**b); //49

// 실습 2 할당연산자
let x = 10;

x+=5;
x*=2;
console.log(x); //30

// 실습 3 typeof 연산자
console.log(typeof "hello"); //String
console.log(typeof false); //Boolean
console.log(typeof [1,2,3]); //Array
console.log(typeof  function() {}); //function

// 실습 4 비교연산자
let n = 5;
console.log(n =="5"); //true
console.log(n === "5"); //false
console.log(n!=6); //true
console.log(n >=5); //true

// 실습 5 논리연산자
a = true;
b = false;

console.log(a&&b); //false
console.log(a||b); //true
console.log(!a); //false

// 실습 6 삼항연산자
let age = 16;
let result = (age >= 18) ? "성인" : "미성년자";
console.log(result); // 미성년자
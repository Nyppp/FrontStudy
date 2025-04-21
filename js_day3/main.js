// 직접 import해오기
// import {add,substract} from './math.js';

// console.log(add(5,3));
// console.log(substract(5,3));

// lodash를 통한 패키지 매니저 호출
const _= require('lodash');

const numbers = [1,2,3,4,5];
const sum = _.sum(numbers);

function add(a,b){
    return a+b;
}

try{
    const result = add(1,5);
    console.log(result);
} catch(error){
    if(error instanceof TypeError){
        console.log("Type error : ", error.message);
    } else if(error instanceof SyntaxError){
        console.log("Syntax error : ", error.message);
    }
    console.log('에러가 발생했습니다 : ', error);
}

console.log(sum);
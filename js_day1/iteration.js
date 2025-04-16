//반복문 1번 실습
//for loop
for(let i = 0 ; i <= 10; i+=2){
    console.log(i);
}

//while loop
let i =0
while (i<= 10){
    console.log(i);
    i+=2;
}

//반복문 2번 실습
//for loop
let sum = 0;
for(let i=1; i<=100; i++){
    sum += i;
}

console.log(sum)

//while loop
let sum2 = 0;
let key = 1;
while(key <= 100){
    sum2 += key;
    key++;
}

console.log(sum2);


//반복문 4번 실습
//for loop
for(let i=1; i<=10; i++){
    if(i == 5){
        break;
    }
    console.log(i);
}

//while loop
let num = 1;
while(num<=10){
    if(num == 5){
        break;
    }
    console.log(num);
    num++;
}


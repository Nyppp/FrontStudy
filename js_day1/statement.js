// 실습 1번
let score = 92;

if(score >= 90){
    console.log("A");
} else if (score>=80){
    console.log("B");
} else{
    console.log("C");
}

// 실습 2번
let id = "admin";
let pw = "122234";

if(id === "admin"){
    if(pw == "1234"){
        console.log("로그인 성공");
    } else{
        console.log("로그인 실패");
    }
} else{
    console.log("로그인 실패");
}

// 실습 3번
let a = 10;
let b = 5;
let op ="+";

switch(op){
        case "+":
            console.log(a+b);
            break;
        case "-":
            console.log(a-b);
            break;
        case "*":
            console.log(a*b);
            break;
        case "/":
            console.log(a/b);
            break;
        default:
            console.log("지원하지 않는 연산자 입니다.")
}
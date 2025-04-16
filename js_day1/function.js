// 함수 실습 1번
// 기본 함수 정의
function print_name(name){
    console.log("안녕하세요 " + name + "님!");
}
print_name("노윤표");

// 익명 함수
const print_name_anonymous = function(name){
    console.log("안녕하세요 " + name + "님!");
}
print_name_anonymous("노윤표");

// 화살표 함수
const print_name_arrow = (name) => {
    console.log("안녕하세요 " + name + "님!");
}
print_name_arrow("노윤표");

// 콜백 함수
function print_name_callback(name, callback){
    callback(name);
}
// 하드코딩 스타일, 권장하지 않음
// print_name_callback(function() {
//     console.log("안녕하세요 노윤표님!");
// });

// 권장되는 스타일(호출 함수에서 인자로 전달할 변수 다 설정해두고, 콜백은 기능만)
function print_name_func(name){ 
    console.log("안녕하세요 " + name + "님!");
}
print_name_callback("노윤표", print_name_func);


// 함수 실습 2번
function add_numbers(num1, num2){
    return num1 + num2;
}
console.log(add_numbers(3, 57));

// 함수 실습 3번
function check_adult(age){
    if(age > 18){
        return "성인입니다.";
    }
    else{
        return "미성년자입니다.";
    }
}
console.log(check_adult(19));
console.log(check_adult(18));
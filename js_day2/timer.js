// console.log('Start');

// // 2초 후에 실행되는 비동기 작업
// setTimeout(() => {
//     console.log('Timeout callback');
// }, 2000);

// // 1초마다 실행되는 비동기 작업
// setInterval(() => {
//     console.log('Interval callback');
// }, 1000);

// console.log('End');

let count = 0;

function repeatFunction() {
    console.log('Repeat function executed! Count:', count);
    count++;

    // 1초마다 repeatFunction 반복 실행 (최대 5번)
    if (count < 5) {
        setTimeout(repeatFunction, 1000);
    }
}

// 초기 실행
setTimeout(repeatFunction, 1000);
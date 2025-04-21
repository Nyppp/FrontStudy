// DOM요소 가져오기
const adviceText = document.getElementById('advice-text');
const newAdviceButton = document.getElementById('new-advice-button');

// 서버에서 조언 가져오는 함수
function fecthAdvice() {
    // ajax 요청 생성
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.adviceslip.com/advice', true);

    // 요청 완료 이벤트처리
    xhr.onload = function(){
        if(xhr.status === 200){
        const response = JSON.parse(xhr.responseText);
        const advice = response.slip.advice;
        adviceText.textContent = advice;
        }else{
            adviceText.textContent = '조언을 가져오지 못했습니다.';
        }
    }
    // 요청 전송
    xhr.send();
}

//초기 화면 조언 표시
fecthAdvice();

// 버튼을 누를 때 마다 조언 불러오기 핸들러
newAdviceButton.addEventListener('click', function(){
    fecthAdvice();
});
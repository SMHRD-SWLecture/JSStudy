// 1. 주기함수
// setInterval(함수,시간), setTimeout(함수,시간)
// function temp() {
//     console.log("안녕");
// }

// 1자리 수 -> 0+한자리수로 나타내기
function clock() {
    var clock = document.getElementById('clock');
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    // 한 자리 숫자 앞에 0을 붙이는 함수
    function padZero(num) {
        return num < 10 ? "0" + num : num;
    }
    
    // 시간, 분, 초에 대해 한 자리 숫자 앞에 0을 붙임
    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);
    
    if (hours > 12) {
        hours = padZero(hours - 12);
        clock.innerHTML = hours + ":" + minutes + ":" + seconds + " PM";
    } else if (hours == 12) {
        hours = padZero(hours);
        clock.innerHTML = hours + ":" + minutes + ":" + seconds + " PM";
    } else {
        clock.innerHTML = hours + ":" + minutes + ":" + seconds + " AM";
    }
}

setInterval(clock, 1000);

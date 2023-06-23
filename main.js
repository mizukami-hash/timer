"use strict";
{
  const timer = document.querySelector("#timer");
  const min = document.querySelector("#min");
  const sec = document.querySelector("#sec");
  const reset = document.querySelector("#reset");
  const start = document.querySelector("#start");

  let startTime;
  let timeToCountDown = 0;
  let timerId;
  let isRunning = false;
  let timeLeft;

  function upDateTimer(t) {
    let d = new Date(t);
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ms = d.getMilliseconds();
    m = ("0" + m).slice(-2);
    s = ("0" + s).slice(-2);
    ms = ("00" + ms).slice(-3);
    timer.textContent = m + ":" + s + "." + ms;
  }

  function countDown() {
    // 残り時間を表示する
    timerId = setTimeout(() => {
      timeLeft = timeToCountDown - (Date.now() - startTime);
      countDown();
      upDateTimer(timeLeft);

      if (timeLeft < 0) {
        isRunning = false;
        start.textContent = "Start";
        clearTimeout(timerId);
        timeLeft = 0;
        timeToCountDown = 0;
        upDateTimer(timeLeft);
        return;
      }
      if (timeLeft < 180000) {
        timer.classList.add("three-minutes");
        if (timeLeft < 30000) {
          timer.classList.add("thirty-seconds");
          if (timeLeft < 10) {
            timer.classList.remove("thirty-seconds");
            timer.classList.remove("three-minutes");
          }
        }
      }
    }, 10);
  }
  start.addEventListener("click", () => {
    if (isRunning === false) {
      isRunning = true;
      start.textContent = "Stop";
      startTime = Date.now();
      countDown();
    } else {
      clearTimeout(timerId);
      isRunning = false;
      start.textContent = "Start";
      timeToCountDown = timeLeft;
    }
  });

  min.addEventListener("click", () => {
    if (isRunning === true) {
      return;
    }
    timeToCountDown += 60 * 1000;
    if (timeToCountDown < 60) {
      timeToCountDown = 0;
    }
    upDateTimer(timeToCountDown);
  });

  sec.addEventListener("click", () => {
    if (isRunning === true) {
      return;
    }
    timeToCountDown += 1000;
    if (timeToCountDown < 60) {
      timeToCountDown = 0;
    }
    upDateTimer(timeToCountDown);
  });

  reset.addEventListener("click", () => {
    timeToCountDown = 0;
    upDateTimer(timeToCountDown);
  });
}

// 現在日時を取得
// スタート時間を設定
// Passed(elapsed) = now-starttime
// timetocountdown =5s
// timetocountdown -elapsedtime =lefttime(表示時間)

//(表示時間) Left = start -passed

//     // 分、秒に変換する関数
//     function upDateTimer(t){
//         let d =new Date(t);
//         let m = d.getMinutes();
//         let s = d.getSeconds();
//         let ms = d.getMilliseconds();
//         m =('0'+ m ).slice(-2);
//         s =('0'+ s ).slice(-2);
//         ms =('00'+ ms ).slice(-3);
//         timer.textContent=m+':'+s+':'+ms;
//     }

// function countDown(){
//     // 残り時間を表示する
//     timerId=setTimeout(() => {
//         timeLeft=  timeToCountDown - (Date.now()-startTime);
//         countDown();
//         upDateTimer(timeLeft);

//         if(timeLeft<0){
//             isRunning=false;
//             start.textContent='Start';
//             clearTimeout(timerId);
//             timeLeft=0;
//             timeToCountDown=0;
//             upDateTimer(timeLeft);
//             return;
//         }
//     }, 10);
// }
//     start.addEventListener('click',()=>{

//         if(isRunning === false){
//             isRunning =true;
//             start.textContent='Stop';
//             startTime=Date.now();
//             countDown();
//         }else{
//             clearTimeout(timerId);
//             isRunning=false;
//             start.textContent='Start';
//             timeToCountDown=timeLeft;

//         }
//     })

//     min.addEventListener('click',()=>{
//         if (isRunning=== true){
//             return;
//         }
//         timeToCountDown += 60*1000;
//         if(timeToCountDown < 60){
//             timeToCountDown=0;
//         }
//         upDateTimer(timeToCountDown);
//     })

//     sec.addEventListener('click',()=>{
//         if (isRunning=== true){
//             return;
//         }
//         timeToCountDown += 1000;
//         if(timeToCountDown < 60){
//             timeToCountDown=0;
//         }
//         upDateTimer(timeToCountDown);
//     })

//     reset.addEventListener('click',()=>{
//         timeToCountDown=0;
//         upDateTimer(timeToCountDown);

//     })

// }

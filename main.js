"use strict";

{
  const timer = document.querySelector("#timer");
  const btn = document.querySelector("#btn");
  const stopBtn=document.querySelector('#stopBtn');

  let endTime;
  let countdown=0;
  let intervalId;
  

  function check() {
    // ３分ー経過時間（現在時間）
    countdown = endTime - new Date().getTime();

    // ０以下で動作を停止
    if (countdown < 0) {
      clearInterval(intervalId);
      countdown = 3 * 60000; /*3分*/
    }
  

    //   ミリ秒を秒に変換
    const totalSeconds = Math.floor(countdown / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);

    // ２桁表示
    const minutesFormatted = String(minutes).padStart(2, "0");
    const secondsFormatted = String(seconds).padStart(2, "0");

    timer.textContent = `${minutesFormatted}:${secondsFormatted}`;
  } /*check 閉じタグ*/


  btn.addEventListener("click", () => {
    endTime = new Date().getTime() + 3 * 60000 
    intervalId = setInterval(check, 100);
    
  }); 

//   一時停止する関数
  function stop(){
    clearInterval(intervalId);
    
     }
//   再開する関数

  stopBtn.addEventListener('click',()=>{
    stop();

  })

  // ２個目：練習　今日の残り時間のタイマー
  // 参考　https://tcd-theme.com/2021/08/javascript-countdowntimer.html

  const hour = document.getElementById("hour");
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");

  // 今日の日付＋１で明日の日付を取得し、差分で今日の残り時間を見る
  function today() {
    const now = new Date();
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const difference = tomorrow.getTime() - now.getTime();

    const seconds2 = Math.floor(difference / 1000) % 60;
    const minutes2 = Math.floor(difference / 1000 / 60) % 60;
    const hour2 = Math.floor(difference / 1000 / 60 / 60);

    hour.textContent = hour2;
    min.textContent = minutes2;
    sec.textContent = seconds2;
  }
  today();
  setInterval(today, 1000);

}

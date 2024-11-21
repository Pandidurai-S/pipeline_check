/*const hours = document.querySelector(".hr");
const minutes = document.querySelector(".min");
const seconds = document.querySelector(".sec");
setInterval(runClock, 1000);

function runClock() {
    const time = new Date();
    const second = time.getSeconds();
    const minute = time.getMinutes();
    const hour = time.getHours();

    const secondRotation = (second / 60) * 360;
    const minuteRotation = (minute / 60) * 360;
    const hourRotation = ((hour % 12) / 12) * 360 + (minute / 60) * 30; 

    hours.style.setProperty("--rotation", hourRotation);
    minutes.style.setProperty("--rotation", minuteRotation);
    seconds.style.setProperty("--rotation", secondRotation);
}
runClock();
*/
const hours = document.querySelector(".hr");
const minutes = document.querySelector(".min");
const seconds = document.querySelector(".sec");

function clockRun(){
    const time = new Date();
    const second = time.getSeconds();
    const minute = time.getMinutes();
    const hour = time.getHours();

    const secRotation = (second/60)*360;
    const minRotation = (minute/60)*360;
    const hrRotation = ((hour%12)/12)*360+(minute/60)*30;

    seconds.style.setProperty("--rotation",secRotation);
    minutes.style.setProperty("--rotation",minRotation);
    hours.style.setProperty("--rotation",hrRotation);

    const audio = new Audio('sound3.mp3');
    audio.play();
    
}
setInterval(clockRun,1000);
clockRun();
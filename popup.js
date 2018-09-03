var bgWindow = chrome.extension.getBackgroundPage();
var timer_id = null;

$(document).ready(function(){
    chrome.runtime.sendMessage(
        { cmd: "is_running" },
        function (is_running) {
            if (is_running) {
                setWorkingMode();
                displayCountDown();
            }
            else {
                setWaitingMode();
            }
        }
    );
});

document.getElementById("startTimer").onclick = function() {
    bgWindow.countdownStartFunction();
    setWorkingMode();
    displayCountDown();
};

document.getElementById("stopTimer").onclick = function() {
    bgWindow.countdownStopFunction();
    clearInterval(timer_id);
    setWaitingMode();
};

function setWaitingMode(){
    document.getElementById("waiting").style.display="block";
    document.getElementById("working").style.display="none";
    document.getElementById("counter").innerHTML="READY"
};

function setWorkingMode(){
    document.getElementById("waiting").style.display="none";
    document.getElementById("working").style.display="block";
};

function displayCountDown(num){
    chrome.runtime.sendMessage(
        { cmd: "count" },
        function (count){
            var countdown = function(){
                count--;
                document.getElementById("counter").innerHTML=formatCount(count);
            }
            timer_id = setInterval(function(){
                countdown();
                if(count === 0){
                    clearInterval(timer_id);
                    setWaitingMode();
                }}, 1000)
        }
    );
};

function formatCount(num) {
    var result = "";
    var min = Math.floor((num / 60) % 60);
    var sec = Math.floor(num % 60);
    result += ('00' + min).slice(-2) + ":";
    result += ('00' + sec).slice(-2);
    return result;
}
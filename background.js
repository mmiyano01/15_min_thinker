var set_time = 900; // 15min = 900sec
var count = 0;
var timer_id = null;
var is_running = false;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (is_running) {
            switch (request.cmd) {
                case "is_running":
                    sendResponse(is_running);
                    return true;
                case "count":
                    sendResponse(count);
                    return true;
                default:
                    break;
            }
        }
        sendResponse("");
        return true;
    }
);

function countdownStartFunction(tab) {
    is_running = true;
    count = set_time;
    var countdown = function(){
        count--;
    }
    timer_id = setInterval(function(){
        countdown();
        if(count === 0){
            is_running = false;
            alert("Time's up!")
            clearInterval(timer_id);
        }}, 1000)
    return true;
};

function countdownStopFunction(tab) {
    is_running = false;
    clearInterval(timer_id);
    count = 0;
    return true;
};
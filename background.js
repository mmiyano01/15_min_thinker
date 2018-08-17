var set_time = 900; // 15min = 900sec
var count = 0;
var timer_id = null;

function countdownStartFunction(tab) {
    alert("Let you know 15 min later!")
    count = set_time;
    var countdown = function(){
        count--;
    }
    timer_id = setInterval(function(){
        countdown();
        if(count === 0){
            alert("Time's up!")
            clearInterval(timer_id);
        }}, 1000)
};

function countdownStopFunction(tab) {
    clearInterval(timer_id);
    count = 0;
    alert("Stopped.")
};

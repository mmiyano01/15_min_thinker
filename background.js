var set_time = 900; // 15min = 900sec

chrome.browserAction.onClicked.addListener(function(tab) {
    alert("Let you know 15 min later!")
    var count = set_time;
    var countdown = function(){
        count--;
    }
    var id = setInterval(function(){
        countdown();
        if(count === 0){
            alert("Time's up!")
            clearInterval(id);
        }}, 1000)
});

//document.browserAction.addEventListener('DOMContentLoaded', function() {
//    var link = document.getElementById('startTimer');
//    link.addEventListener('click', function() {
//        var count = set_time;
//        var countdown = function(){
//            count--;
//        }
//        var id = setInterval(function(){
//            countdown();
//            if(count === 0){
//                alert("Times up!")
//                clearInterval(id);
//            }}, 1000)
//    });
//});


//document.getElementById("startTimer").onclick = function(){
    //var count = set_time;
    //var countdown = function(){
    //    console.log(count--);
    //}
    //var id = setInterval(function(){
    //    countdown();
    //    if(count === 0){
    //        clearInterval(id);
    //    }}, 1000)
//};
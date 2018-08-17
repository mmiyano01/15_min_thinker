var set_time = 0; // 15min = 900sec
document.getElementById("startTimer").onclick = function() {
    var count = set_time;
    var countdown = function(){
        //console.log(count--);
        setInterval(your_function, 1000)
        var id = setTimeout(countdown, 1000);
        if(count === 0){
            clearTimeout(id);
            alert("Time up!");
        }
    }


};

//alert("HEY!");
//chrome.storage.sync.get('time', function(data) {
//    startTimer.style.backgroundColor = data.time;
//    startTimer.setAttribute('value', data.time);
//    startTimer.onclick = function(element) {
//        let time = element.target.value;
//        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//            chrome.tabs.executeScript(
//                tabs[0].id,
//                {code: 'document.body.style.backgroundColor = "' + time + '";'});
//       });
// };
//});
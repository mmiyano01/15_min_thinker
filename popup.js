var bgWindow = chrome.extension.getBackgroundPage();

document.getElementById("startTimer").onclick = function() {
    bgWindow.countdownStartFunction();
};

document.getElementById("stopTimer").onclick = function() {
    bgWindow.countdownStopFunction();
};
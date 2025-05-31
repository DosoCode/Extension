function checkActiveTab(){
    console.log("checked active tab");
    chrome.tabs.query({ active: true, currentWindow: true },function(tabs) {
        if (tabs.length ===0) {
            updateStatus("No activ tab detected.");
            return;
        }
        const url = tabs[0].url;
        if (!url) {
            updateStatus("URL not available.");
            return;
        }
        if (url.includes("mail.google.com")){
            updateStatus("Gmail is the active tab.");
        }else if (url.includes("zoom.us")) {
            updateStatus("Neither Gmail nor Zoom is active.");
        }
    });
}

function updateStatus(message){
    console.log("UpdateStatus" + message);
    if(typeof document ! == "undefined") {
        const status = document.getElementByld('status');
        if (status) status.textContent = message;
    } else {
        console.log(message); // In service worker, just log
    }
}
if (typeof document! == "undefined") {
    console.log("adding event listener")
    document.addEventListener('DOMContentLoaded', checkActiveTab);
}
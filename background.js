chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
});

chrome.runtime.onStartup.addListener(() => {
    console.log('Extension started');
});

let popupOpen = false;

chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "popup") {
    popupOpen = true;
    port.onDisconnect.addListener(() => {
      popupOpen = false;
    });
  }
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "isPopupOpen") {
    sendResponse({ popupOpen });
  }
});

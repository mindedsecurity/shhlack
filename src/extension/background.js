chrome.browserAction.onClicked.addListener(function(tab) { 
  
    chrome.tabs.sendMessage(tab.id, {
      tabId: tab.id,
      action: "createmessage" 
    });
});
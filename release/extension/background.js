chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.sendMessage(tab.id, {
    tabId: tab.id,
    action: "createmessage"
  });
});

chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason == "install" || details.reason == "update") {
    chrome.tabs.query({
      url: ["https://*.slack.com/*", "http://*.slack.com/*"]
    }, function(results) {
      results.forEach((tab) => {
        chrome.tabs.reload(tab.id, {
          bypassCache: true
        });
      });
    });
  }
});
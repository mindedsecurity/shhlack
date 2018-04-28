
var sendMsg = function(title, msg) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    var current = tabs[0];
    console.log(tabs, msg);
    chrome.tabs.sendMessage(current.id, {
      tabId: current.id,
      action: "message",
      value: msg,
      title: title
    });
  });
};

window.addEventListener("load", function() {
  var textarea = document.querySelector("textarea");
  var input = document.querySelector("#title");

  textarea.addEventListener("keydown", function(event) {
    if (event.keyCode == 13 && event.ctrlKey == true) {
      sendMsg(input.value, this.value);
    }
  });
  document.querySelector("button").addEventListener("click", function(event) {
    sendMsg(input.value, textarea.value);
  });
});

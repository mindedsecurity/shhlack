const DEBUG = true;
var debug = DEBUG ? console.log.bind(console) : function() {};
// added for FF compatibility
var messageListener = chrome.extension.onMessage || chrome.runtime.onMessage 
messageListener.addListener(
  function(msg) {
    switch (msg.action) {
      case 'createmessage':
        var cev = new CustomEvent("SHHLACK:CREATEMSG", {
          bubbles: false,
          cancelable: true
        })
        window.dispatchEvent(cev);
        break;
      case 'message':
        var cev = new CustomEvent("SHHLACK:MSG", {
          detail: JSON.stringify({content:msg.value,title:msg.title}),
          bubbles: false,
          cancelable: true
        })
        window.dispatchEvent(cev);
        break;
    }
  }
);
function injectScript(scriptString) {
  try {
    var actualCode = '( ' + scriptString + ')();//# sourceURL=<INJECTOR>' + (scriptString.name || Math.random());
    var script = document.createElement('script');
    script.textContent = actualCode;
    (document.head || document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);
  } catch (e) {
    console.error(e);
  }
}

injectScript(this.INJECTOR);
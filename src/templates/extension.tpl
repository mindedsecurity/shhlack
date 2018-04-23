(function(global) {
  var _____INJECT_____ = @@SHHLACK_PLACEHOLDER@@;

  if (global
    && global.navigator
    && global.navigator.userAgent.toLowerCase().indexOf('electron') === -1) {
    global.INJECTOR = _____INJECT_____;
  } else {
    _____INJECT_____();
  }
})(typeof global !== 'undefined' ? global : window);
//# sourceURL=<ENSLACKER>

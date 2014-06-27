define("example/0.1.0/develop/jslib/news/news1-debug", ["example/0.1.0/develop/jslib/modules/mod1-debug"], function(require, exports, module) {
  require("example/0.1.0/develop/jslib/modules/mod1-debug");
  console.log('news1');
});
define("example/0.1.0/develop/jslib/modules/mod1-debug", [], function(require, exports, module) {
  console.log('mod1');
});
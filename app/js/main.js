var $ = require('jquery');
var test1 = require('./testone');
var test2 = require('./test2');
var date = require('./date');

test2.saySomething();
test2.oneMore();
test1();


$("body").append("<h4> Today is " + date() + "</h4>");


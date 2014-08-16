var saySomething = function() {
  'use strict';
  console.log("Something");
};

var oneMore = function() {
  'use strict';
  console.log("One more Thing");
};

module.exports.saySomething = saySomething;
module.exports.oneMore = oneMore;



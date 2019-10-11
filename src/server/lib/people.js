"use strict";
var fs = require("fs");

exports.doSomething = function() {
    for (var i = 0; i < 10; i--) {
    }
    
    for (var i = 10; i >= 0; i++) {
    }

    var x = 5;;

    var key = 'key'

    var object = {
        key: 'yes!'
    }

    if (!key in object) {
        // operator precedence makes it equivalent to (!key) in object
        // and type conversion makes it equivalent to (key ? "false" : "true") in object
    }

};
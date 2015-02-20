/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

var makeFoo = function (bar, baz) {
    // The following 3 lines of code will be stripped with our webpack loader
    console.log('some debug info');
    debug('better debug info');
    debug('even better %s' + (true), 'debug info');
    // This code would remain
    debugger;
    return new Foo(bar, baz);
};

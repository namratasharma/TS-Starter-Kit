//This file is not transpiled so should use common js or ES
//Register Babel to transpile our test before it runs
require("@babel/register")();

//Disable webpack features which Mocha doesn't understand - CSS
require.extensions['.css'] = function(){};

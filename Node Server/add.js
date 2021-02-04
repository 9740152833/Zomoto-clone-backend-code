var os = require('os');
var fs = require('fs');
var http = require('http');
console.log("Platform" +" "+os.platform());
console.log("Ari"+" "+os.arch());

var a=10;
var b =20;
var sum = a+b;
console.log("adding the number "+sum);
console.log("Hello world");

fs.writeFileSync("hello.txt","Well Come Edureka");




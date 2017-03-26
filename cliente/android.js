var http = require('http');
var opcoes = {
  hostname: "localhost",
  port: "8081",
  path: "/",
  method: 'post',
  headers : {
    'Accept' : 'application/json',
    'Content-type' : 'application/json'
  }
}

var json = {nome : 'Jose'};
var string_json = JSON.stringify(json);
var buffer = [];

var req = http.request(opcoes, function(res) {

  res.on('data', function (pedaco) {
    buffer.push(pedaco);
  });

  res.on('end', function () {
    var corpo = Buffer.concat(buffer).toString();
    console.log(corpo);
  });

  res.on('error', function() {

  });
});

req.write(string_json);
req.end();

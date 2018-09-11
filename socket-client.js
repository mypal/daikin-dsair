const net = require("net");
const Decoder = require('./decoder');
const Queue = require('./queue');
const Util = require('util');
// sock is an instance of net.Socket
var sock = net.connect({ host: '192.168.1.150', port: 8008 }, function() {
    console.log('server connected');
    Queue.setCallback(function(param) {
        let buffer = param.toBuffer();
        console.log('\x1B[31m', new Date().toLocaleTimeString(), ' send:\x1B[0m');
        console.log(Util.inspect(param, {showHidden: true, depth: null}));
        sock.write(buffer);
    });
});

sock.on('data', function(data) {
    while (data) {
      console.log('\x1B[33m', new Date().toLocaleTimeString(), ' receive:\x1B[0m');
      let decoder = Decoder(data);
      let {res, buf} = decoder;
      data = buf;
      if (res) {
        console.log(Util.inspect(res, {showHidden: true, depth: null}));
        res.result.do();
      }
    }
});

sock.on('end', function() {
    console.log('client disconnected');
});

sock.on('error', function(err) {
    console.log('socket error - ', err);
});

sock.on('close', function() {
    console.log('echo client was closed');
    process.exit(0);
});

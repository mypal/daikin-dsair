require('./socket-client');
const Queue = require('./queue');
const HandShakeParam = require('./send/hand-shake');
const HeartBeatParam = require('./send/heartbeat-param');

Queue.push(new HandShakeParam());
setInterval(() => {
    Queue.push(new HeartBeatParam());
}, 60000);

require('./socket-client');
const Queue = require('./queue');
const HandShakeParam = require('./send/hand-shake');
const HeartBeatParam = require('./send/heartbeat-param');
const db = require('./bo/db');

Queue.push(new HandShakeParam());
setInterval(() => {
    Queue.push(new HeartBeatParam());
}, 60000);

const AcQueryStatusParam = require('./send/ac-qery-stat');
setTimeout(() => {
  // console.log('\x1B[32m', new Date().toLocaleTimeString(), ' db:\x1B[0m');
  // console.log(db.toString());
  let acQuryStat = new AcQueryStatusParam();
  acQuryStat.setRoom(6);
  acQuryStat.setUnit(0);
  acQuryStat.setType(0x7F);
  Queue.push(acQuryStat);
}, 500);

const AcControlParam = require('./send/ac-ctrl');
const Ctrl = require('./enum/control');
setTimeout(() => {
  let acCtrl = new AcControlParam();
  acCtrl.room = 6;
  acCtrl.unit = 0;
  acCtrl.switch = Ctrl.Switch.enum.ON;
  acCtrl.mode = Ctrl.Mode.enum.HEAT;
  acCtrl.airFlow = Ctrl.AirFlow.enum.WEAK;
  acCtrl.settedTemp = 30;
  acCtrl.fanDir1 = Ctrl.FanDirection.enum.P4;
  acCtrl.fanDir2 = Ctrl.FanDirection.enum.P4;
  // acCtrl.humidity = Ctrl.Humidity.enum.STEP2;
  Queue.push(acCtrl);
}, 800);
const CmdType = require('./enum/cmd-type');
const Device = require('./enum/device');
const ResultFactory = require('./recv/result-factory');

module.exports = function (buf) {
  if (buf.readUInt8(0) !== 2) {
    return {
      res: null,
      buf: null
    };
  } else {
    let len = buf.readUInt16LE(1);
    if (!len || buf.length - 4 < len || buf.readUInt8(len + 3) !== 3) {
      if (!len) {
        console.log('heartbeat', buf);
      } else {
        console.log('exception', buf);
        console.log(len, buf.length, buf.readUInt8(buf.length - 1))
      }
      return {
        res: null,
        buf: null
      };
    }
    let subbodyVer = buf.readUInt8(5);
    let cmdId = buf.readUInt32LE(7);
    let devType = buf.readUInt8(11);
    let devId = buf.readUInt32LE(12);
    let device = Device.find(devType, devId);
    let needAck = buf.readUInt8(16);
    let cmdTypeId = buf.readUInt16LE(17);
    let cmdType = CmdType.find(cmdTypeId);
    let subbodyBuf = buf.slice(19, buf.length - 1);
    let result = ResultFactory(cmdType, subbodyBuf, {
      subbodyVer, device
    });
    console.log('subbody:', subbodyBuf.toString('hex'));
    return {
      res: {
        len, subbodyBuf, cmdId, device, needAck, cmdType, result, subbodyVer
      },
      buf: buf.length - 4 === len ? null : buf.slice(len + 4)
    };
  }
};

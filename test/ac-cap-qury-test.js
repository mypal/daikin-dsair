let buf = Buffer.from('05020100a70f87030100a30f87040100a30f87050100a30f87060100a30f87', 'hex');

const Param = require('../recv/ac-cap-qury');
const DeviceType = require('../enum/device');
const Configs = require('../configs');
Configs.isNewVersion = true;
let param = new Param(buf, {subbodyVer: 1, device: DeviceType.enum.NEWAIRCON});

console.log(JSON.stringify(param, null, 4));
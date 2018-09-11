const Param = require('./param');
const Device = require('../enum/device');

class SystemParam extends Param {
	constructor(cmdType, hasResult) {
		super(Device.enum.SYSTEM, cmdType, hasResult);
	}
}

module.exports = SystemParam;
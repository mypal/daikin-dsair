const Param = require('./param');
const Device = require('../enum/device');

class AirConParam extends Param {
	constructor(cmdType, hasResult) {
		super(Device.enum.NEWAIRCON, cmdType, hasResult);
	}
}

module.exports = AirConParam;

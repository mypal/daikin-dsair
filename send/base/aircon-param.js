const Param = require('./param');
const Device = require('../../enum/device');

/**
 * 空调请求参数结构
 */
class AirConParam extends Param {
	constructor(cmdType, hasResult) {
		super(Device.enum.NEWAIRCON, cmdType, hasResult);
	}
}

module.exports = AirConParam;

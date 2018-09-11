const Param = require('./param');
const Device = require('../../enum/device');

/**
 * 系统请求参数结构
 */
class SystemParam extends Param {
	constructor(cmdType, hasResult) {
		super(Device.enum.SYSTEM, cmdType, hasResult);
	}
}

module.exports = SystemParam;
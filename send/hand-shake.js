const SystemParam = require('./base/system-param');
const CmdType = require('../enum/cmd-type');

/**
 * 初始化握手
 */
class HandShakeParam extends SystemParam {
	constructor() {
		super(CmdType.enum.SYS_HAND_SHAKE, true);
	}
}

module.exports = HandShakeParam;
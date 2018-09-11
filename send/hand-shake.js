const SystemParam = require('./system-param');
const CmdType = require('../enum/cmd-type');

class HandShakeParam extends SystemParam {
	constructor() {
		super(CmdType.enum.SYS_HAND_SHAKE, true);
	}
}

module.exports = HandShakeParam;
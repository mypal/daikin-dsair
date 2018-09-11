const AirconParam = require('./aircon-param');
const CmdType = require('../enum/cmd-type');

// 网关没响应，请求了也没啥用
class AcRecommendedIndoorTempParam extends AirconParam {
	constructor() {
		super(CmdType.enum.AIR_RECOMMONEDED_INDOOR_TEMP, true);
	}
}

module.exports = AcRecommendedIndoorTempParam;
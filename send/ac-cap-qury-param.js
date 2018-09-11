const AirconParam = require('./base/aircon-param');
const CmdType = require('../enum/cmd-type');

/**
 * 空调功能请求
 */
class AirConCapabilityQueryParam extends AirconParam {
	constructor() {
		super(CmdType.enum.AIR_CAPABILITY_QUERY, true);
		this.airCons = [];
	}
	generateSubbody(buf, pos) {
		buf.writeUInt8(this.airCons.length, pos++);
		this.airCons.forEach(item => {
			buf.writeUInt8(item.getRoomId(), pos++);
			buf.writeUInt8(1, pos++);
			buf.writeUInt8(0, pos++);
		});
		return pos;
	}
	setAirCons(list) {
		this.airCons = list;
	}
}

module.exports = AirConCapabilityQueryParam;
const AirconParam = require('./base/aircon-param');
const CmdType = require('../enum/cmd-type');

/**
 * 查询空调当前状态
 */
class AirConQueryStatusParam extends AirconParam {
	constructor() {
		super(CmdType.enum.AIR_CAPABILITY_QUERY, true);
		this.room = null;
		this.type = null;
		this.unit = null;
	}
	generateSubbody(buf, pos) {
		buf.writeUInt8(this.room, pos++);
		buf.writeUInt8(this.unit, pos++);
		buf.writeUInt8(this.type, pos++);
		return pos;
	}
	setRoom(id) {
		this.room = id;
	}
	setType(type) {
		this.type = type;
	}
	setUnit(id) {
		this.unit = id;
	}
}

module.exports = AirConQueryStatusParam;
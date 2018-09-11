const SystemParam = require('./system-param');
const CmdType = require('../enum/cmd-type');

class GetRoomInfoParam extends SystemParam {
	constructor() {
		super(CmdType.enum.SYS_GET_ROOM_INFO, true);
		this.rooms = [];
	}

	addRooms(id) {
		this.rooms.push(id);
	}

	generateSubbody(buffer, pos) {
		pos = buffer.writeUInt8(this.rooms.length, pos);
		this.rooms.forEach(item => {
			pos = buffer.writeUInt16LE(item, pos);
		});
		return pos;
	}
}

module.exports = GetRoomInfoParam;
const Result = require('./result');
const Queue = require('../queue');
const Room = require('../bo/room');
const AirCon = require('../bo/air-con');
const DeviceType = require('../enum/device');
const db = require('../bo/db');
const AirConCapabilityQueryParam = require('../send/ac-cap-qury-param');

class GetRoomInfo extends Result {
  /**
   * @param {Buffer} buf
   * @param opt
   */
	constructor(buf, opt) {
		super(buf);

		this.rooms = [];
		this.count = buf.readUInt16LE(0); // 0~1 房间数
		let pos = 2;

		// 遍历房间
		let roomCnt = buf.readUInt8(pos++);
		while (roomCnt--) {
			let room = new Room();
			room.setId(buf.readUInt16LE(pos));
			pos += 2;

			// 设置房间名称、别名、图标
			let roomVer = 1;
			if (opt.subbodyVer === 1) {
				roomVer = buf.readUInt8(pos++);
			}

			if (roomVer !== 2) {
				let strLen;
				strLen = buf.readUInt8(pos++);
				room.setName(buf.toString('utf8', pos, pos+strLen));
				pos += strLen;
				strLen = buf.readUInt8(pos++);
				room.setAlias(buf.toString('utf8', pos, pos+strLen));
				pos += strLen;
				strLen = buf.readUInt8(pos++);
				room.setIcon(buf.toString('utf8', pos, pos+strLen));
				pos += strLen;
			}

			// 遍历房间设备
			let devCnt = buf.readUInt16LE(pos);
			pos += 2;
			while (devCnt--) {
				let dev = DeviceType.find(buf.readUInt32LE(pos));
				pos += 4;

				// 遍历单元
				let unitCnt = buf.readUInt16LE(pos);
				pos += 2;

				for (let i = 0; i < unitCnt; i++) {
					let unit = new AirCon();
					if (dev === DeviceType.enum.NEWAIRCON) {
						unit.setNewAirCon(true);
						unit.setBathRoom(false);
						room.setAirCon(unit);
					} else {
						// 这些设备我家没有，忽略
						console.error('未识别设备');
					}
					unit.setRoomId(room.getId());
					unit.setUnitId(i);
					if (roomVer !== 1) {
            let strLen;
            strLen = buf.readUInt8(pos++);
            unit.setName(buf.toString('utf8', pos, pos+strLen));
            pos += strLen;
            strLen = buf.readUInt8(pos++);
            unit.setAlias(buf.toString('utf8', pos, pos+strLen));
            pos += strLen;
					}
				}
			}
			this.rooms.push(room);
		}
	}
	do() {
		db.setRooms(this.rooms);
		let param = new AirConCapabilityQueryParam();
		param.setAirCons(this.rooms.filter(room => room.ac.newAirCon).map(room => room.ac));
		Queue.push(param);
	}
}

module.exports = GetRoomInfo;

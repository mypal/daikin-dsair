const Result = require('./result');
const Queue = require('../queue');
const GetRoomInfoParam = require('../send/get-room-info');
const AcRecmdIndTempParam = require('../send/ac-recmd-ind-temp-param');

class HandShake extends Result {
	constructor(buffer) {
		super(buffer);
		this.time = buffer.toString();
	}
	do() {
		let getRoomInfoParam = new GetRoomInfoParam();
		getRoomInfoParam.addRooms(65535);
		getRoomInfoParam.setSubbodyVer(1);
		Queue.push(getRoomInfoParam);
		Queue.push(new AcRecmdIndTempParam());
	}
}

module.exports = HandShake;

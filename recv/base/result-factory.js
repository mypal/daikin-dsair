const HandShakeResult = require('../hand-shake');
const GetRoomInfoResult = require('../get-room-info');
const AcCapabilityQueryResult = require('../ac-cap-qury');
const AckResult = require('../ack');
const Result = require('./result');
const CmdType = require('../../enum/cmd-type');

module.exports = function(cmdType, buffer, opt) {
	switch (cmdType) {
		case CmdType.enum.SYS_HAND_SHAKE:
			return new HandShakeResult(buffer, opt);
		case CmdType.enum.SYS_GET_ROOM_INFO:
			return new GetRoomInfoResult(buffer, opt);
		case CmdType.enum.SYS_ACK:
			return new AckResult(buffer, opt);
		case CmdType.enum.AIR_CAPABILITY_QUERY:
			return new AcCapabilityQueryResult(buffer, opt);
		default:
			return new Result(buffer, opt);
	}
};

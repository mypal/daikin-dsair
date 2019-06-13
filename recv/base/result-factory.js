const HandShakeResult = require('../hand-shake');
const GetRoomInfoResult = require('../get-room-info');
const AcCapabilityQueryResult = require('../ac-cap-qury');
const AcQueryStatusResult = require('../ac-qery-stat');
const AcStatusChangedResult = require('../ac-stat-ch');
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
		case CmdType.enum.QUERY_STATUS:
			return new AcQueryStatusResult(buffer, opt);
		case CmdType.enum.STATUS_CHANGED:
			return new AcStatusChangedResult(buffer, opt);
		default:
			return new Result(buffer, opt);
	}
};

class CmdType {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}
	toString() {
		return `${this.name}(${this.id})`;
	}
}

CmdType.enum = {};
CmdType.enum.AIR_CAPABILITY_QUERY = new CmdType(6, 'AIR_CAPABILITY_QUERY');
CmdType.enum.AIR_RECOMMONEDED_INDOOR_TEMP = new CmdType(4, 'AIR_RECOMMONEDED_INDOOR_TEMP');
CmdType.enum.AIR_SCENARIO_CONTROL = new CmdType(32, 'AIR_SCENARIO_CONTROL');
// CmdType.enum.CONTROL = new CmdType(1, 'CONTROL');
CmdType.enum.QUERY_SCENARIO_SETTING = new CmdType(34, 'QUERY_SCENARIO_SETTING');
CmdType.enum.QUERY_STATUS = new CmdType(3, 'QUERY_STATUS');
CmdType.enum.SCENARIO_SETTING = new CmdType(33, 'SCENARIO_SETTING');
CmdType.enum.STATUS_CHANGED = new CmdType(2, 'STATUS_CHANGED');
CmdType.enum.SYS_ACK = new CmdType(1, 'SYS_ACK');
CmdType.enum.SYS_CHANGE_PW = new CmdType(17, 'SYS_CHANGE_PW');
CmdType.enum.SYS_CMD_RSP = new CmdType(2, 'SYS_CMD_RSP');
CmdType.enum.SYS_CMD_TRANSFER = new CmdType(40961, 'SYS_CMD_TRANSFER');
CmdType.enum.SYS_CMD_TRANSFER_TARGET_QUIT = new CmdType(40962, 'SYS_CMD_TRANSFER_TARGET_QUIT');
CmdType.enum.SYS_ERR_CODE = new CmdType(6, 'SYS_ERR_CODE');
CmdType.enum.SYS_GET_ROOM_INFO = new CmdType(48, 'SYS_GET_ROOM_INFO');
CmdType.enum.SYS_GET_WEATHER = new CmdType(7, 'SYS_GET_WEATHER');
CmdType.enum.SYS_HAND_SHAKE = new CmdType(40960, 'SYS_HAND_SHAKE');
CmdType.enum.SYS_LOGIN = new CmdType(16, 'SYS_LOGIN');
CmdType.enum.SYS_QUERY_SCHEDULE_FINISH = new CmdType(68, 'SYS_QUERY_SCHEDULE_FINISH');
CmdType.enum.SYS_QUERY_SCHEDULE_ID = new CmdType(66, 'SYS_QUERY_SCHEDULE_ID');
CmdType.enum.SYS_QUERY_SCHEDULE_SETTING = new CmdType(65, 'SYS_QUERY_SCHEDULE_SETTING');
CmdType.enum.SYS_SCENARIO_CONTROL = new CmdType(67, 'SYS_SCENARIO_CONTROL');
CmdType.enum.SYS_SCHEDULE_SETTING = new CmdType(64, 'SYS_SCHEDULE_SETTING');
CmdType.enum.SYS_SET_BASIC_ROOM_INFO = new CmdType(49, 'SYS_SET_BASIC_ROOM_INFO');
CmdType.enum.SYS_TIME_SYNC = new CmdType(5, 'SYS_TIME_SYNC');
CmdType.find = function(id) {
	let map = CmdType.enum;
	for (let key in map) {
		if (map.hasOwnProperty(key) && map[key].id === id) {
			return map[key];
		}
	}
	return null;
};

module.exports = CmdType;
class OutDoorRunCond {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}
	toString() {
		return `${this.name}(${this.id})`;
	}
}

OutDoorRunCond.enum = {};
OutDoorRunCond.enum.COLD = new OutDoorRunCond(2, 'COLD');
OutDoorRunCond.enum.HEAT = new OutDoorRunCond(1, 'HEAT');
OutDoorRunCond.enum.VENT = new OutDoorRunCond(0, 'VENT');
OutDoorRunCond.find = function(id) {
	let map = OutDoorRunCond.enum;
	for (let key in map) {
		if (map.hasOwnProperty(key) && map[key].id === id) {
			return map[key];
		}
	}
	return null;
};

module.exports = OutDoorRunCond;
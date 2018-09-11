class FanDirection {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}
	toString() {
		return `${this.name}(${this.id})`;
	}
}

FanDirection.enum = {};
FanDirection.enum.FIX = new FanDirection(0, 'FIX');
FanDirection.enum.STEP_1 = new FanDirection(1, 'STEP_1');
FanDirection.enum.STEP_2 = new FanDirection(2, 'STEP_2');
FanDirection.enum.STEP_3 = new FanDirection(3, 'STEP_3');
FanDirection.enum.STEP_4 = new FanDirection(4, 'STEP_4');
FanDirection.enum.STEP_5 = new FanDirection(5, 'STEP_5');
FanDirection.find = function(id) {
	let map = FanDirection.enum;
	for (let key in map) {
		if (map.hasOwnProperty(key) && map[key].id === id) {
			return map[key];
		}
	}
	return null;
};

module.exports = FanDirection;
class FanVolume {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}
	toString() {
		return `${this.name}(${this.id})`;
	}
}

FanVolume.enum = {};
FanVolume.enum.FIX = new FanVolume(1, 'FIX');
FanVolume.enum.NO = new FanVolume(0, 'NO');
FanVolume.enum.STEPLESS = new FanVolume(7, 'STEPLESS');
FanVolume.enum.STEP_2 = new FanVolume(2, 'STEP_2');
FanVolume.enum.STEP_3 = new FanVolume(3, 'STEP_3');
FanVolume.enum.STEP_4 = new FanVolume(4, 'STEP_4');
FanVolume.enum.STEP_5 = new FanVolume(5, 'STEP_5');
FanVolume.find = function(id) {
	let map = FanVolume.enum;
	for (let key in map) {
		if (map[key].id === id) {
			return map[key];
		}
	}
	return null;
};

module.exports = FanVolume;
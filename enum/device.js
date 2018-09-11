class Device {
    constructor(type, id, name) {
        this.type = type;
        this.id = id;
        this.name = name;
    }
    toString() {
        return `${this.name}(${this.type}, ${this.id})`;
    }

}

Device.enum = {};
Device.enum.AIRCON = new Device(8, 18, 'AIRCON');
Device.enum.BATHROOM = new Device(8, 24, 'BATHROOM');
Device.enum.GEOTHERMIC = new Device(8, 19, 'GEOTHERMIC');
Device.enum.HD = new Device(8, 22, 'HD');
Device.enum.NEWAIRCON = new Device(8, 23, 'NEWAIRCON');
Device.enum.SYSTEM = new Device(0, 0, 'SYSTEM');
Device.enum.VENTILATION = new Device(8, 20, 'VENTILATION');
Device.find = function(type, id) {
  let map = Device.enum;
    if (id === undefined) {
        for (let key in map) {
            if (map[key].id === type) {
                return map[key];
            }
        }
    } else {
        for (let key in map) {
            if (map[key].type === type && map[key].id === id) {
                return map[key];
            }
        }
    }
    return null;
};

module.exports = Device;

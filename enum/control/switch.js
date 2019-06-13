class Switch {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  toString() {
    return `${this.name}(${this.id})`;
  }
}

Switch.enum = {};
Switch.enum.OFF = new Switch(0, 'OFF');
Switch.enum.ON = new Switch(1, 'ON');

Switch.find = function(id) {
  let map = Switch.enum;
  for (let key in map) {
    if (map.hasOwnProperty(key) && map[key].id === id) {
      return map[key];
    }
  }
  return null;
};

module.exports = Switch;
class AirFlow {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  toString() {
    return `${this.name}(${this.id})`;
  }
}

AirFlow.enum = {};
AirFlow.enum.SUPER_WEAK = new AirFlow(0, 'SUPER_WEAK');
AirFlow.enum.WEAK = new AirFlow(1, 'WEAK');
AirFlow.enum.MIDDLE = new AirFlow(2, 'MIDDLE');
AirFlow.enum.STRONG = new AirFlow(3, 'STRONG');
AirFlow.enum.SUPER_STRONG = new AirFlow(4, 'SUPER_STRONG');
AirFlow.enum.AUTO = new AirFlow(5, 'AUTO');

AirFlow.find = function(id) {
  let map = AirFlow.enum;
  for (let key in map) {
    if (map.hasOwnProperty(key) && map[key].id === id) {
      return map[key];
    }
  }
  return null;
};

module.exports = AirFlow;
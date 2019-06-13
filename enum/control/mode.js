class Mode {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  toString() {
    return `${this.name}(${this.id})`;
  }
}

Mode.enum = {};
Mode.enum.COLD = new Mode(0, 'COLD');
Mode.enum.DRY = new Mode(1, 'DRY');
Mode.enum.VENTILATION = new Mode(2, 'VENTILATION');
Mode.enum.AUTO = new Mode(3, 'AUTO');
Mode.enum.HEAT = new Mode(4, 'HEAT');
Mode.enum.AUTODRY = new Mode(5, 'AUTODRY');
Mode.enum.RELAX = new Mode(6, 'RELAX');
Mode.enum.SLEEP = new Mode(7, 'SLEEP');
Mode.enum.PERHEAT = new Mode(8, 'PERHEAT');
Mode.enum.MOREDRY = new Mode(9, 'MOREDRY');

Mode.find = function(id) {
  let map = Mode.enum;
  for (let key in map) {
    if (map.hasOwnProperty(key) && map[key].id === id) {
      return map[key];
    }
  }
  return null;
};

module.exports = Mode;
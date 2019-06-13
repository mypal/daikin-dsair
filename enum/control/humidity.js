class Humidity {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  toString() {
    return `${this.name}(${this.id})`;
  }
}

Humidity.enum = {};
Humidity.enum.CLOSE = new Humidity(0, 'CLOSE');
Humidity.enum.STEP1 = new Humidity(1, 'STEP1');
Humidity.enum.STEP2 = new Humidity(2, 'STEP2');
Humidity.enum.STEP3 = new Humidity(3, 'STEP3');

Humidity.find = function(id) {
  let map = Humidity.enum;
  for (let key in map) {
    if (map.hasOwnProperty(key) && map[key].id === id) {
      return map[key];
    }
  }
  return null;
};

module.exports = Humidity;
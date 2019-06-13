class FanDirection {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  toString() {
    return `${this.name}(${this.id})`;
  }
}

/*
FanDir1低4位，上下
FanDir2高4位，左右
 */
FanDirection.enum = {};
FanDirection.enum.INVALID = new FanDirection(0, 'INVALID');
FanDirection.enum.P0 = new FanDirection(1, 'P0'); // 最右 最上
FanDirection.enum.P1 = new FanDirection(2, 'P1');
FanDirection.enum.P2 = new FanDirection(3, 'P2');
FanDirection.enum.P3 = new FanDirection(4, 'P3');
FanDirection.enum.P4 = new FanDirection(5, 'P4'); // 最左 最下
FanDirection.enum.AUTO = new FanDirection(6, 'AUTO'); // 自动
FanDirection.enum.SWING = new FanDirection(7, 'SWING'); // 扫风

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
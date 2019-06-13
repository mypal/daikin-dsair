const AirconParam = require('./base/aircon-param');
const CmdType = require('../enum/cmd-type');

/**
 * 查询空调当前状态
 */
class AirConControlParam extends AirconParam {
  constructor() {
    super(CmdType.enum.CONTROL, true);
    this._room = null;
    this._unit = null;
    this._switch = null;
    this._mode = null;
    this._airFlow = null;
    this._settedTemp = null;
    this._fanDir1 = null;
    this._fanDir2 = null;
    this._humidity = null;
  }
  generateSubbody(buf, pos) {
    buf.writeUInt8(this._room, pos++);
    buf.writeUInt8(this._unit, pos++);
    let typePos = pos++;
    let type = 0;
    if (this._switch) {
      type = type | (1 << 0);
      buf.writeUInt8(this._switch.id, pos++);
    }
    if (this._mode) {
      type = type | (1 << 1);
      buf.writeUInt8(this._mode.id, pos++);
    }
    if (this._airFlow) {
      type = type | (1 << 2);
      buf.writeUInt8(this._airFlow.id, pos++);
    }
    if (this._settedTemp) {
      type = type | (1 << 4);
      buf.writeUInt16LE(Math.round(this._settedTemp*10), pos);
      pos += 2;
    }
    if (this._fanDir1 && this._fanDir2) {
      type = type | (1 << 5);
      buf.writeUInt8(this._fanDir1.id | this._fanDir2.id << 4, pos++);
    }
    if (this._humidity) {
      type = type | (1 << 6);
      buf.writeUInt8(this._humidity.id, pos++);
    }
    buf.writeUInt8(type, typePos);
    return pos;
  }

  set room(value) {
    this._room = value;
  }

  set unit(value) {
    this._unit = value;
  }

  set switch(value) {
    this._switch = value;
  }

  set mode(value) {
    this._mode = value;
  }

  set airFlow(value) {
    this._airFlow = value;
  }

  set settedTemp(value) {
    this._settedTemp = value;
  }

  set fanDir1(value) {
    this._fanDir1 = value;
  }

  set fanDir2(value) {
    this._fanDir2 = value;
  }

  set humidity(value) {
    this._humidity = value;
  }
}

module.exports = AirConControlParam;
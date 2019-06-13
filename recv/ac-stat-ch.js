const Result = require('./base/result');
const Control = require('../enum/control/index');

/**
 * 空调功能响应结构
 */
class AcStatusChangedResult extends Result {
  /**
   * @param {Buffer} buf
   * @param opt
   */
	constructor(buf, opt) {
    super(buf);

    let pos = 0;

    // 遍历房间
    this.roomId = buf.readUInt8(pos++);
    this.unitId = buf.readUInt8(pos++);
    let statusFlag = buf.readUInt8(pos++);
    if (statusFlag >>> 0 & 0x1) {
      this.switch = Control.Switch.find(buf.readUInt8(pos++));
    }
    if (statusFlag >>> 1 & 0x1) {
      this.mode = Control.Mode.find(buf.readUInt8(pos++));
    }
    if (statusFlag >>> 2 & 0x1) {
      this.airFlow = Control.AirFlow.find(buf.readUInt8(pos++));
    }
    if (statusFlag >>> 3 & 0x1) {
      this.currentTemp = (buf.readUInt16LE(pos)/10).toFixed(1);
      pos += 2;
    }
    if (statusFlag >>> 4 & 0x1) {
      this.settedTemp = buf.readUInt16LE(pos);
      pos += 2;
    }
    if (statusFlag >>> 5 & 0x1) {
      let fanDirection = buf.readUInt8(pos++);
      this.fanDir1 = Control.FanDirection.find(fanDirection & 0xF);
      this.fanDir2 = Control.FanDirection.find(fanDirection >>> 4 & 0xF);
    }
    if (statusFlag >>> 6 & 0x1) {
      this.humidity = Control.Humidity.find(buf.readUInt8(pos++));
    }
  }

	do() {
	}
}

module.exports = AcStatusChangedResult;

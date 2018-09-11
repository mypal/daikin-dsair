const Result = require('./base/result');
const AirCon = require('../bo/air-con');
const DeviceType = require('../enum/device');
const OutDoorRunCond = require('../enum/out-door-run-cond');
const FanVolume = require('../enum/fan-volume');
const FanDirection = require('../enum/fan-direction');
const db = require('../bo/db');
const Configs = require('../configs');

/**
 * 空调功能响应结构
 */
class AcCapabilityQueryResult extends Result {
  /**
   * @param {Buffer} buf
   * @param opt
   */
	constructor(buf, opt) {
    super(buf);

    this.airCons = [];
    let pos = 0;

    // 遍历房间
    let roomCnt = buf.readUInt8(pos++);
    while (roomCnt--) {
      let roomId = buf.readUInt8(pos++);

      let devCnt = buf.readUInt8(pos++);
      while (devCnt--) {
        let ac = new AirCon();
      	ac.setUnitId(buf.readUInt8(pos++));
      	ac.setRoomId(roomId);
      	if (opt.device === DeviceType.enum.NEWAIRCON) {
      		ac.setNewAirCon(true);
      		ac.setBathRoom(false);
				} else {
      		console.error('未识别的设备');
				}
				let flag = buf.readUInt8(pos++);
				ac.setFanVolume(FanVolume.find(flag >>> 5 & 7));
				ac.setDryMode(flag >>> 4 & 1);
				ac.setAutoMode(flag >>> 3 & 1);
				ac.setHeatMode(flag >>> 2 & 1);
				ac.setCoolMode(flag >>> 1 & 1);
				ac.setVentilationMode(flag & 1);
				if (Configs.isNewVersion) {
					let flag = buf.readUInt8(pos++);
					let fanDirection;
					if (!!(flag & 1)) {
						fanDirection = FanDirection.enum.STEP_5;
					} else {
            fanDirection = FanDirection.enum.FIX;
					}
					ac.setFanDirection(fanDirection);

					if (flag >>> 1 & 1) {
            fanDirection = FanDirection.enum.STEP_5;
          } else {
            fanDirection = FanDirection.enum.FIX;
          }
          ac.setFanDirection2(fanDirection);

					ac.setFanDirectionAuto(!!(flag >>> 2 & 1));
					ac.setFanVolumeAuto(!!(flag >>> 3 & 1));

					flag = buf.readUInt8(pos++);
					ac.setOutDoorRunCond(OutDoorRunCond.find(flag >>> 6 & 3));
          ac.setMoreDryMode(flag >>> 4 & 1);
          ac.setPreHeatMode(flag >>> 3 & 1);
          ac.setAutoDryMode(flag >>> 2 & 1);
          ac.setRelaxMode(flag >>> 1 & 1);
          ac.setSleepMode(flag & 1);
        } else {
					buf.readUInt8(pos++);
				}
				this.airCons.push(ac);
			}
    }
  }

	do() {
		db.setAirCons(this.airCons);
	}
}

module.exports = AcCapabilityQueryResult;

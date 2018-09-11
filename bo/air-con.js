class AirCon {
  constructor() {
  }

  setNewAirCon(flag) {
    this.newAirCon = flag;
  }

  setBathRoom(flag) {
    this.bathRoom = flag;
  }

  setRoomId(id) {
    this.roomId = id;
  }

  getRoomId() {
    return this.roomId;
  }

  setUnitId(unitId) {
    this.unitId = unitId;
  }

  setName(name) {
    this.name = name;
  }

  setAlias(alias) {
    this.alias = alias;
  }

  setFanVolume(fan) {
    this.fanVolume = fan;
  }

  setDryMode(number) {
    this.dryMode = !!number;
  }

  setAutoMode(number) {
    this.autoMode = !!number;
  }

  setHeatMode(number) {
    this.headMode = !!number;
  }

  setCoolMode(number) {
    this.coolMode = !!number;
  }

  setVentilationMode(number) {
    this.ventilationMode = !!number;
  }

  setFanDirection(fanDirection) {
    this.fanDirection = fanDirection;
  }
  setFanDirection2(fanDirection) {
    this.fanDirection2 = fanDirection;
  }
  setFanDirectionAuto(flag) {
    this.fanDirectionAuto = flag;
  }
  setFanVolumeAuto(volume) {
    this.fanVolumeAuto = volume;
  }

  setOutDoorRunCond(v) {
    this.outDoorRunCond = v;
  }

  setMoreDryMode(number) {
    this.moreDryMode = !!number;
  }

  setPreHeatMode(number) {
    this.preHeatMode = !!number;
  }

  setAutoDryMode(number) {
    this.autoDryMode = !!number;
  }

  setRelaxMode(number) {
    this.relaxMode = !!number;
  }

  setSleepMode(number) {
    this.sleepMode = !!number;
  }
}

module.exports = AirCon;

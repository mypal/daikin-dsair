const Result = require('./result');
const Configs = require('../configs');

class Ack extends Result {
  /**
   * @param {Buffer} buf
   * @param opt
   */
  constructor(buf, opt) {
    super(buf);
    this.version = buf.readUInt8(0);
  }
  do() {
    if (Configs.isNewVersion === undefined) {
      Configs.isNewVersion = this.version === 2;
    }
  }
}

module.exports = Ack;

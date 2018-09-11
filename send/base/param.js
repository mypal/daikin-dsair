let cnt = 0;

/**
 * 基础参数结构
 */
class Param {
	constructor(deviceType, cmdType, hasResult) {
		this.cmdType = cmdType;
		this.deviceType = deviceType;
		this.hasResult = hasResult;
		this.subBodyVer = 0;
		this.needAck = 1;
	}

	setSubbodyVer(ver) {
		this.subBodyVer = ver;
	}

  /**
   * @param {Buffer} buffer
   * @param {number} pos
   * @return {number}
   */
	generateSubbody(buffer, pos) {
		return pos;
	}

	toBuffer() {
		let buffer = Buffer.alloc(1024);
		let pos = 0;
		pos = buffer.writeUInt8(2, pos); // 0 保留字
		let lenPos = pos;
		pos = buffer.writeUInt16LE(0, pos); // 1~2 长度，不含首尾保留字及长度本身
		pos = buffer.writeUInt8(13, pos); // 3 保留字
		pos = buffer.writeUInt8(0, pos); // 4 保留字
		pos = buffer.writeUInt8(this.subBodyVer, pos); // 5 子体版本
		pos = buffer.writeUInt8(0, pos); // 6 保留字
		pos = buffer.writeUInt32LE(++cnt, pos); // 7~10 自增命令ID
		pos = buffer.writeUInt8(this.deviceType.type, pos); // 11 设备类型
		pos = buffer.writeUInt32LE(this.deviceType.id, pos); // 12~15 设备类型id
		pos = buffer.writeUInt8(this.needAck, pos); // 16 是否需要ack
		pos = buffer.writeUInt16LE(this.cmdType.id, pos); // 17~18 命令类型id
		pos = this.generateSubbody(buffer, pos);
		pos = buffer.writeUInt8(3, pos); // 最后一位 保留字
		buffer.writeUInt16LE(pos-4, lenPos);
		return buffer.slice(0, pos);
	}
}

module.exports = Param;
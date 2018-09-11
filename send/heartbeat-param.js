/**
 * 心跳请求参数
 */
class HeartbeatParam {
	constructor() {}
    toBuffer() {
        let buffer = Buffer.alloc(4);
        buffer.writeUInt8(2, 0);
        buffer.writeUInt16LE(0, 1);
        buffer.writeUInt8(3, 3);
        return buffer;
    }
}

module.exports = HeartbeatParam;
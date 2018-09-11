class Room {
	constructor() {}
	setId(id) {
		this.id = id;
	}
	setName(name) {
		this.name = name;
	}
	setAlias(alias) {
		this.alias = alias;
	}
	setIcon(icon) {
		this.icon = icon;
	}
	setAirCon(ac) {
		this.ac = ac;
	}
	getId() {
		return this.id;
	}
}

module.exports = Room;
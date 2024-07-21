class Event {
	constructor() {
		this.callbacks = new Map();
		this._callbackID = 0;
	}

	subscribe(callback) {
		this.callbacks.set(callback, this._callbackID++);
	}

	unsubscribe(id) {
		this.callbacks.delete(id);
	}

	_call(data) {
		for (const callback of this.callbacks.values()) {
			callback(data);
		}
	}
}

class Entity {
	get id() {}

	set score(value) {}
	get score() {}

	set parent(entity) {}
	get parent() {}

	set color(colorID) {}
	get color() {}

	set team(teamID) {}
	get team() {}

	get target() {}

	setSkill(skillID, value) {}
	getSkill(skillID) {}

	setBodyAttribute(attribute, value) {}
	getBodyAttribute(attribute) {}

	fireWeapon(index, force = false) {}
	define(set) {}
	teleport(vector) {}
	push(vector) {}
	kill() {}
	destroy() {}
}

class Player extends Entity {
	set auth(tier) {}
	get auth() {}

	get keyUp() {}
	get keyDown() {}
	get keyLeft() {}
	get keyRight() {}
	get mouseLeft() {}
	get mouseMiddle() {}
	get mouseRight() {}
	
	set autofire(state) {}
	get autofire() {}

	set autospin(state) {}
	get autospin() {}

	set override(state) {}
	get override() {}

	set autoguide(state) {}
	get autoguide() {}

	kick(reason) {}

	sendMessage(message) {}
}

class Food {
	static clear() {}
	static addToNest(Class, weight) {}
	static addToNorm(Class, weight) {}
	static getClassesInNest() {}
	static getClassesInNorm() {}
}

class Room {
	static get width() {}
	static get height() {}
	static get layout() {}
	static get cycleSpeed() {}
	static get runSpeed() {}

	static setLayoutTileAt(x, y, colorID) {}
}

export const arras = {
	announceMessage: function (message) {},
	spawnEntity: function (location, Class) {},
	getEntitiesAt: function (location, radius, entityQueryOptions = {}) {},
	getPlayers: function (entityQueryOptions) {},
	getEntities: function (entityQueryOptions) {},
	getEntityById: function (entityID) {},
	setSpawnLocationForTeamPlayers: function (team, location) {},
	scoreboard: {
		getPositionFromEntity: function (entity) {},
		getEntityAtPosition: function (spot) {},
	},
	system: {
		getGameTickTime: function () {},
		setGameTickInterval: function (callback, interval) {},
		setGameTickTimeout: async function (callback, timeout) {}
	},
	food: Food,
	room: Room,
	afterEvents: {
		entitySpawn: new Event(),
		entityDie: new Event(),
		socketConnect: new Event(),
		socketDisconnect: new Event(),
		gameStart: new Event(),
		gameEnd: new Event(),
		skillUpgrade: new Event(),
		tankUpgrade: new Event(),
		collision: new Event(),
		testbedAttempt: new Event(),
		gunFire: new Event(),
		healthChanged: new Event()
	},
	beforEvents: {
		skillUpgrade: new Event(),
		tankUpgrade: new Event(),
		collision: new Event(),
		testbedAttempt: new Event(),
		gunFire: new Event()
	}
}
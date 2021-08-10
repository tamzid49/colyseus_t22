"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyState = exports.PlayerData = void 0;
const schema_1 = require("@colyseus/schema");
const type = schema_1.Context.create();
class PlayerData extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.clientID = "";
        this.posX = 0;
        this.posY = 0;
    }
}
__decorate([
    type("string")
], PlayerData.prototype, "clientID", void 0);
__decorate([
    type("float32")
], PlayerData.prototype, "posX", void 0);
__decorate([
    type("float32")
], PlayerData.prototype, "posY", void 0);
exports.PlayerData = PlayerData;
class MyState extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.players = new schema_1.MapSchema();
    }
}
__decorate([
    type({ map: PlayerData })
], MyState.prototype, "players", void 0);
exports.MyState = MyState;

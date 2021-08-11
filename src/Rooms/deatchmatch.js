"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeathMatch = void 0;
const index_1 = require("colyseus/build/index");
const State_1 = require("./State");
console.log("aa");
class DeathMatch extends index_1.Room {
    //playerindexMap = new Map<string, number>();
    onAuth() {
        console.log("auth success");
        return true;
    }
    onJoin(client, options, auth) {
        console.log("join");
        //this.playerindexMap.set(client.id, this.state.players.size)
        let playerData = new State_1.PlayerData();
        playerData.clientID = options.id;
        this.state.players.set(client.id, playerData);
    }
    onCreate() {
        this.setState(new State_1.MyState());
        this.onMessage("sync", (client, data) => {
            console.log(JSON.stringify(data));
            //return;
            //let cubeData = JSON.parse(data)
            let id = this.state.players.get(client.id).clientID;
            let playerData = new State_1.PlayerData();
            playerData.clientID = id;
            playerData.posX = data.x;
            playerData.posY = data.y;
            this.state.players.set(client.id, playerData);
            //this.state.players.set(options.id, playerData)
        });
    }
}
exports.DeathMatch = DeathMatch;

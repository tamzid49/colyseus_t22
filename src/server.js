"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colyseus_1 = require("colyseus");
const deatchmatch_1 = require("./Rooms/deatchmatch");
const port = 3000;
const gameServer = new colyseus_1.Server();
gameServer.define("deathmatch", deatchmatch_1.DeathMatch);
gameServer.listen(port);

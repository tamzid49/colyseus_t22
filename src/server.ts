import { Server } from "colyseus";
import {DeathMatch} from "./Rooms/deatchmatch"
const port = 3000;

const gameServer = new Server();
gameServer.define("deathmatch", DeathMatch)
gameServer.listen(port);
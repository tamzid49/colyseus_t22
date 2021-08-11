import { CollectionSchema, Context, DefinitionType, Schema, SetSchema } from "@colyseus/schema"
import {Client, Room} from "colyseus/build/index"
import { chdir } from "process";
import { MyState, PlayerData } from "./State";



console.log("aa")
export class DeathMatch extends Room{

    //playerindexMap = new Map<string, number>();

    onAuth(){
        console.log("auth success")
        return true;
    }
    onJoin(client: Client, options: any, auth: any){
        console.log("join")
        //this.playerindexMap.set(client.id, this.state.players.size)
        let playerData:PlayerData = new PlayerData()
        playerData.clientID = options.id
        this.state.players.set(client.id, playerData)
    }
    
    onCreate(){
        this.setState(new MyState());
        this.onMessage("sync", (client, data)=>{
            console.log(JSON.stringify(data))
            //return;
            //let cubeData = JSON.parse(data)
            let id = this.state.players.get(client.id).clientID
            let playerData:PlayerData = new PlayerData()
            playerData.clientID = id
            playerData.posX = data.x
            playerData.posY = data.y
            this.state.players.set(client.id, playerData)
            //this.state.players.set(options.id, playerData)
        })
    }
}





import { CollectionSchema, Context, MapSchema, Schema } from "@colyseus/schema";

const type = Context.create();

export class PlayerData extends Schema {
    @type("string") clientID: string = "";
    @type("float32") posX: number = 0;
    @type("float32") posY: number = 0;
}

export class MyState extends Schema{
    @type({ map: PlayerData }) players = new MapSchema<PlayerData>();
}
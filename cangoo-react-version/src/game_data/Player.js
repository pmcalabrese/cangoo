// import Thingy from "thingy52_web_bluetooth"
// import { start } from "./thingy/bt";

class Player {
    constructor(index, name, device) {
        this.index = index
        this.name = name
        this.device = device
    }

    start(device) {
        const thingy = new Thingy({ logEnabled: true });

    }
}


// const thingy = new Thingy({ logEnabled: true });
        // ask for name, maybe you can use prompt?
        // player index, name, device
        // const player = new Player(1, "Marco", thingy);

        // JK Notes: The above inputs will be used as follow:


        // start(thingy);
        // player.start();

        // player.on("jump", () => {
        //     /**
        //      * {
        //      *      player1: {
        //      *          jump_count:
        //      *          game_state: "waiting_for_device" | "waiting_for_name" | "ready" | "playing" | "gameover-lose" | "gameover-win"   
        //      *      }
        //      * }
        //      */
        // })
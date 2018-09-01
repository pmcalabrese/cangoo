import * as PIXI from "pixi.js";

console.log("it works");

let type = "WebGL"
        if(!PIXI.utils.isWebGLSupported()){
            type = "canvas"
        }
        
        PIXI.utils.sayHello(type)
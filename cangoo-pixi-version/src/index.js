import * as PIXI from "pixi.js";
import Thingy from "thingy52_web_bluetooth";
import Queue from "./queue";

console.log("it works");

let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas"
}

PIXI.utils.sayHello(type)

var q = new Queue(10);

const thingy = new Thingy({ logEnabled: true });

async function start(device) {
    await device.connect();
    await device.temperature.start();
    // await thingy.quaternionorientation.start();
    await thingy.gravityvector.start()
    // thingy.addEventListener("quaternionorientation", (data) => {
    //     console.log("data", data.detail);
    // });
    await thingy.addEventListener("gravityvector", (data) => {
        // console.log("*data", data.detail.value);

        // const shake_intensity = Object.keys(data.detail.value).map( v => Math.abs(data.detail.value[v])) .reduce( (a,b) => (a + b) );
        // console.log(Math.abs(data.detail.value.y));
        const shake_intensity = Math.sqrt((data.detail.value.x*data.detail.value.x + data.detail.value.y*data.detail.value.y + data.detail.value.z*data.detail.value.z))
        // console.log("shake_intensity", shake_intensity);
        // if (shake_intensity > 15.5) {
        //     console.log("shake");
        // }
        q.add(Math.abs(data.detail.value.z));
        // console.log("shake_intensity", shake_intensity);
    })
    await device.addEventListener("temperature", logData);

    var readKeys = () => {
        const q_buffer = q.get();
        let diff = 0;
        for (let i = 0; i < 9; i++) {
            const element = Math.abs(q_buffer[i]);
            const next_element = Math.abs(q_buffer[i+1]);
            if (next_element > element) {
                diff += (next_element - element);
            }
        }
        const abs_diff = Math.abs(diff)
        // console.log("diff", abs_diff);
        if (abs_diff > 4) {
            console.log("jump");
        }
        setTimeout(readKeys, 200);
    }
    
    readKeys();

}

function logData(data) {
    const el = document.querySelector("#temperature");
    el.innerHTML = `Temperature: ${data.detail.value} ${data.detail.unit}`;
}

document.querySelector("#connectBtn").addEventListener("click", async () => {
    start(thingy);
});
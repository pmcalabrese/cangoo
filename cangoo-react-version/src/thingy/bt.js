import Queue from "./queue";
import EventEmitter from './../event-emitter/EventEmitter'

const q = new Queue(10);

export async function start(device) {
    await device.connect();
    await device.gravityvector.start()
    await device.addEventListener("gravityvector", (data) => {
        q.add(Math.abs(data.detail.value.z));
    })

    var readKeys = () => {
        const q_buffer = q.get();
        let diff = 0;
        for (let i = 0; i < 9; i++) {
            const element = Math.abs(q_buffer[i]);
            const next_element = Math.abs(q_buffer[i + 1]);
            if (next_element > element) {
                diff += (next_element - element);
            }
        }
        const abs_diff = Math.abs(diff)
        // console.log("diff", abs_diff);
        if (abs_diff > 4) {
            // console.log('jump');
            EventEmitter.emit('jump', device.name.utilities.device.device.name)
        }
        setTimeout(readKeys, 200);
    }

    readKeys();

}
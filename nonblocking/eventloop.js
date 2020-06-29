const eventloop = {
    queue: [],

    loop() {
        while (this.queue.length) {
            callback = this.queue.shift();
            callback();
        }
        setTimeout(this.loop.bind(this), 50)
    },

    add(callback) {
        this.queue.push(callback)
    }
}

eventloop.loop();

setTimeout(function () {
    console.log(1)
}, 500)

setTimeout(function () {
    console.log(2)
}, 800)
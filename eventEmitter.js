const EventEmitter = require('events').EventEmitter;

class Geektime extends EventEmitter {
    constructor() {
        super();
        setInterval(() => {
            this.emit('new lesson', {price: Math.random() * 100});
        }, 3000)
    }
}

const geektime = new Geektime

geektime.addListener('new lesson', (res) => {

    if (res.price <= 80) {
        console.log('Buy it ', res)
    }
})
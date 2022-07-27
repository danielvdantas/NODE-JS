const { EventEmitter } = require('events')

const ev = new EventEmitter()

// Permanece ouvindo
// ev.on('Say something!', (message) => {
//     console.log('Eu ouvi você', message)
// })

// Ouve apenas uma vez. Assim que ouve encerra.
ev.once('Say something!', (message) => {
    console.log('Eu ouvi você', message)
})

ev.emit('Say something!', "Daniel")
ev.emit('Say something!', "Nay")
ev.emit('Say something!', "Diogo")
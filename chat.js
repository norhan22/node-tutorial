const
  EventEmitter = require('events') 

class Chat extends EventEmitter {
  sendMessage (msg) {
    console.log('ChatModule/sendMessage => New msg :', msg)
    this.emit('sendMessage', {
      id: 1,
      msg
    })
  }
    
}
module.exports = Chat
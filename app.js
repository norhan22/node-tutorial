const
  
  
  path = require('path'),
  os = require('os'),
  greetings = require('./nameModule'),
  Chat = require('./chat'), // Class
  chat = new Chat(), // Object of Chat class
  server = require('./server'),
  logSeparator = () => { console.log(`\n ${'*'.repeat(30)} \n`) }


/////////////////////////////////////////////
// Server Listeners Logs

console.groupCollapsed('Server Logs')
console.groupEnd()
////////////////////////////////////////////
logSeparator()

/////////////////////////////////////////////
// Modules Logs

console.groupCollapsed('Modules')
console.log(' Own Module : ', greetings('Norhan'))
console.log(' et Path of the __filename by Path Build-in module : ', path.parse(__filename).dir)
console.log('   Get total memory the operating system by OS Build-in module : ', os.totalmem())
console.groupEnd()
////////////////////////////////////////////

logSeparator()

/////////////////////////////////////////////
// Chat Listeners Logs

console.groupCollapsed(' Chat Logs')
chat.on('sendMessage',
  (e) => console.log(`Chat listener New Msg : ${e.msg}`)
)
chat.sendMessage('Good Morning!')
console.groupEnd()
////////////////////////////////////////////


const
    path = require('path'),
    os = require('os'),
    EventEmitter = require('events'),
    greetings = require('./nameModule'),
    Chat = require('./chat'), // Class
    chat = new Chat(); // Object of Chat class

console.log(` 
${'*'.repeat(30)}

    Own Module : ${greetings('Norhan')}
    get Path of the __filename by Path Build-in module :
    ${path.parse(__filename).dir}
    Get total memory the operating system by OS Build-in module : ${os.totalmem()} 
 
 ${'*'.repeat(30)}
`);

chat.on('sendMessage', (e) => console.log(`listener New Msg : ${e.msg}`))
chat.sendMessage('Good Morning!');
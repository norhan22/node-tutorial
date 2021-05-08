
const
  http = require('http'),
  server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.write('Node HTTP Module Hello World ')
      res.end()
    } else if (req.url === '/api/classes') {
      res.write(JSON.stringify(
        [
          { id: 1, name: 'arabic' },
          { id: 2, name: 'english' }
        ]))
      res.end()
    }
  })
  
// Using On Listener &&  Socket Class ( Not recommended ) Dealing with REquest
// && Response in createServer Method  more recommended  
// server.on('connection', (socket) => { console.log('New Connection ....') })

server.listen('3000')
console.log('Listen to server')

module.exports.connect = server
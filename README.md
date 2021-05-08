
# Node Hello World App
[Node.js Tutorial for Beginners: Learn Node in 1 Hour  by Programming with Mosh ](https://www.youtube.com/watch?v=TlB_eWDSMt4)

## [0:00](https://youtu.be/TlB_eWDSMt4) What is Node js
- Node is an open source and cross platform runtime environment for executing js code outside browsers 
- We often use node to build backend services like **API** **A**pplication **P**rogramming **I**nterface 

<br>

## [3:01](https://youtu.be/TlB_eWDSMt4?t=181) Node Architecture

- EVERY browser has a JS engine  it takes a js code  and convert to machine code
  - Microsoft edge =>  Charkra 
   Firefox  => SpiderMonkey 
   Chrome => V8 ( the fastest  JS engine )

- Browser provide a runtime environment for executing  JS code 

- *Ryan Dahl => Creator of node* 
   he took v8  Google JS  Engine  and embedded it inside C++ program and called the program Node 
 - Node isn't neither  a programming language nor framework but is a runtime environment  

***So Node is a C++  program that includes a chrome's v8 JS engine***
 
<br/>

## [6:04](https://youtu.be/TlB_eWDSMt4?t=364) How Node works 

- *Node applications is a highly- scalable ,data-intensive and real-time apps*

  -  highly-scalable => **none-blocking asynchronous**
a *single thread*  is used to handle multiple requests 

- The big difference between Node and (asp.net  , others backend framework) apps  is that node app is **asynchronous  non-blocking** but others is a blocking synchronous 

- While database prepares result of a request  node puts a message in an **Event Queue** 
Node continuously monitoring this in background .. once it finds an event in this queue it will take it out and process it 

- Node is **deal** for **I/O - intensive app** that have a lot of disk or network access without need to throw in more hardware which are operations that are mostly offloaded to the operating system.
- **Don't use node** for **CPU-intensive apps** like video encoding or an image manipulation services  because CPU apps needs a lot of calculations that should be done by CPU 


## Your first Node Program 
1. create app.js with console.log("hello") 
2. on terminal call node app.js 

this js file we are gonna to pass it to node and node is gonna to give it to V8 for execution

Node used V8 but not have Window || document  objects that  part of the browser's  runtime environment 
But it have other objects to  work with files , operating system , network and so on


## Node Module System


All Vars && Functions that are defined globally we can access them via this window object  inside the browser
console.log => JS engine will prefix it to Window.console.log 

instead of Window ...  Node used Global => global.console.log 

The vars && functions that defined outside  global , are not added to global object ( reverse  window object )

## Modules

***the global scope problem*** 
In real world apps we split JS code to multiple files so it possible that we have 2 vars || functions with the same name 
when we call them the new one will overwrite the previous one

***Instead we need modularity :***
 - Small blocks that have it's own vars && functions that are scoped to this block || file || module  that not available outside this module ( Called in OOP Private )

- To use the vars || functions outside this module you need to export it and make it public
- Every file in a node app is considered as module
- Every Node app has a main module console.log(module) // module global obj

Create Module => js file with  ( `module.exports.FunctionName = Function )`
Load Module  => `required ('./ModuleFile')`

you can call a single method or an object :

    module.exports = methodName

## Module Wrapper Function

Node wrap every module into an  ***Immediately Invoked Function Expression*** that has some params 

    (function(exports,require,module,__filename,__dirname){})()

 - Require => it's not global but it is local for each module as argument 
- Exports => is shortcut to module.exports  //  module.exports.log => exports.log

***Note :*** (`module.exports = log`)  !== (`exports = log`) because we can't change the reference

## Build-in Modules
*Ex*
 - os => Operating system
 - fs => File system => ( every operation comes in 2 forms async , sync
   methods , we should  always use async type  )
 - events => events
 - http => Http

## Events 
 *Events* module is a *class*  so when require it into const with *PascalCase*  name always like 'EventEmitter'
 
 Ex :
  

    const 
	      EventEmitter = require("events"),
	      emitter= new  EventEmitter ()
    emitter.on('sendMessage', (e) => console.log("listener called : have a message ",e)) 
    emitter.emit("sendMessage" ,{id: 1 , msg:"hello"}) // raise || call an event 

**Note** : order is important here  the listener must be registered before the emit (call the event) 

### Extended Events 

when we register an emitter in module and want to listen it in another 
we should use the module as class  that extends EventsEmitter 

*EX* :

Chat.js  File

	const EventEmitter = require('events');
	
    class Chat extends EventEmitter {
        sendMessage(msg) {
            console.log('ChatModule/sendMessage => New msg :', msg);
            this.emit('sendMessage', {
                id: 1,
                msg
            })
        }

    }
    module.exports = Chat

App.js  File : 
	

    const 
        Chat = require('./chat'), // Class
        chat = new Chat(); // Object of Chat class
    
    chat.on('sendMessage', (e) => console.log(`listener New Msg : ${e.msg}`))
    chat.sendMessage('Good Morning!');

### HTTP Module

- Using On Listener &&  Socket Class ( *Not recommended* ) 
- Dealing with Request
 && Response in createServer Method  more recommended 
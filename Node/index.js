// // Event loop practice
const fs = require('fs');
const http = require('http')
// const url = require('url')
// // const events = require('events');


// //Events

// // let myEventEmitter = new events.EventEmitter()
// // myEventEmitter.on('userCreated', (id, name)=>{
// //     console.log(`A new user ${name} is created with id ${id}`)
// // })
// // myEventEmitter.on('userCreated', (id, name)=>{
// //     console.log(` User ${name} is Updated with id ${id}`)
// // })
// // myEventEmitter.emit('userCreated',10, 'Guruprasad' )



// // console.log("Guru prasad 1");
// // setTimeout(()=>{
// //     console.log("Timer callback Executed");
// // },0)

// // // I/O tasks
// // fs.readFile('../sample.txt', 'utf-8', (err, data)=>{
// //     console.log(data)
// // })

// // setImmediate(()=>{
// //     console.log("Set Immediate executed");
// // })
// // console.log("Guru prasad 2");




// // I/O tasks
// // console.log("Guru prasad 1");
// // fs.readFile('../sample.txt', 'utf-8', ()=>{
// //     console.log("File read complete")
// //     setTimeout(()=>{
// //         console.log("Timer callback Executed");
// //     },0)
    
// //     setImmediate(()=>{
// //         console.log("Set Immediate executed");
// //     })

// //     process.nextTick(()=> console.log("Process.nextTick callback executed "))
// // })


// // console.log("Guru prasad 2");


// //Routes & Headers & Sending Html responses & JSON  

// const htmlFile = fs.readFileSync('./index.html', 'utf-8')
// const users = JSON.parse(fs.readFileSync('../MOCK_DATA (1).json', 'utf-8'))
// const user = fs.readFileSync('./users.html','utf-8')


// let usersData = users.map((use)=>{
//     let output = user.replace('{{%FNAME%}}', use.first_name)
//         output = output.replace('{{%LNAME%}}', use.last_name)
//         output = output.replace('{{%EMAIL%}}', use.gender)
//         output = output.replace('{{%GENDER%}}', use.email)
//         // output = output.replace('{{%ID%}}', use.id)
//         output = output.replace('{{%UNIQUEID%}}', use.id)
//         return output
// })
// const  server = http.createServer((req,res)=>{
//     // res.end(htmlFile);
//     // console.log("A new request recieved");

//     let {query,pathname:path} = url.parse(req.url, true)
//     // console.log(x);


//     // let path = req.url;
//     if(path === '/' || path.toLocaleLowerCase()==='/home'){
//         res.writeHead(200, {
//             'content-Type': 'text/html',
//             'my-header': 'Guruprasad',  //custom header
//         })
//         res.end(htmlFile.replace('{{%CONTENT%}}', user))
//     }
//     else if( path.toLocaleLowerCase()==='/about'){
//         res.writeHead(200)
//         res.end(htmlFile.replace('{{%CONTENT%}}', 'Your are in About'))
//     }
//     else if( path.toLocaleLowerCase()==='/products'){
//         if(!query.id){
//             let allUsers =  htmlFile.replace('{{%CONTENT%}}',usersData.join(','))
//             res.writeHead(200,{'Content-Type':"text/html"})
//             res.end(allUsers)
//         }else{
//             res.end(' This ia a product with ID = '+ query.id)
//         }

//         // console.log(usersData);
      
//         // res.end(htmlFile.replace('{{%CONTENT%}}', 'Your are in Products'))
//     }
//     else if( path.toLocaleLowerCase()==='/contact' ){
//         res.writeHead(200)
//         res.end(htmlFile.replace('{{%CONTENT%}}', 'Your are in Contact'))
//     }
   
//     else{
//         res.writeHead(404)
//         res.end(htmlFile.replace('{{%CONTENT%}}', 'Error 404: Page not found'))
//     }
// });

// server.listen(8000, ()=>{
//     console.log('Server has started');
// })





//Streams

const server = http.createServer((req, res)=>{
    
})  
//Without streams
// server.on('request', (req,res)=>{
//     fs.readFile('./sample.txt', 'utf-8',(err,data)=>{
//         if(err) return res.end('Something went wrong')
//         res.end(data)
//     //  console.log(data);
//     })
// })
//with streams
// server.on('request', (req,res)=>{
//     let rs = fs.createReadStream('./sample.txt');
//     rs.on('data',(chunk)=>{
//         res.write(chunk)
//     })
//     rs.on('end', ()=>{
//         res.end();
//     })
//     rs.on('error', (err)=>{
//         res.end(err)
//     })

// })

//Pipe() method

server.on('request', (req,res)=>{
    let rs = fs.createReadStream('./sample.txt')
    rs.pipe(res)
    //Pipe method only can used in readable streams
    //pipe(writable destination)
})

server.listen(8000, ()=>{
    console.log("Server started");
})
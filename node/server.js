require('dotenv').config()
const http = require('http')
const app = require('./app')
const { openConnection } = require('./services/db/mongo-connection')

const{HOST,PORT} = process.env

openConnection(process.env.MONGO_SERVER_URL).then(_=>{
    app.listen(PORT || 3000,HOST || "127.0.0.1",()=>{
        console.log(`http://${HOST}:${PORT}`);
    })
}).catch(ex=>{
    console.log('could not open connection to mongo db server');
})



const server = http.createServer(app)
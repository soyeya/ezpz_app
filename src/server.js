const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const server = require('http').createServer(app);
const { database } = require('./api/transport.js');

app.use(cors({
    origin : "*",
    credentials: true, 
    optionsSuccessStatus: 200,
 }));

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.post('/subwayApi', async(req, res) => {
    console.log('server', Object.keys(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    const orderAPI = await database.subWayLine(req.body);
    console.log('server', orderAPI);
    res.send(orderAPI);
});

server.listen(PORT , () => {
     console.log(`${PORT} 작동중`);
})
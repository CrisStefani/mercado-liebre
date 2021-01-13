const express = require('express');
const app = express();

const formattedPort = (() => {
    let [,,portNumber] = process.argv;
 
    return portNumber && !isNaN(parseInt(portNumber)) ? parseInt(portNumber) : 3000;
})()


app.use(express.static('public'));


app.listen(process.env.PORT || 3000 , () =>{
    console.log('Servidor funcionando en puerto 3000');
});


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
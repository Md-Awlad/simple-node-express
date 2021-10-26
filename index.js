const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Wow. I am Excited to learning Node and express with nodemon automatic restart');
})

const users =[
    {id:0, name:'Shabana', email:'sabana@gmail.com', phone:'123445678'},
    {id:1, name:'Soniya', email:'soniya@gmail.com', phone:'123445678'},
    {id:2, name:'Shrabonti', email:'sharbonti@gmail.com', phone:'123445678'},
    {id:3, name:'Shusmita', email:'shusmita@gmail.com', phone:'123445678'},
    {id:4, name:'Suchorita', email:'suschorita@gmail.com', phone:'123445678'},
]

// use query parameter
app.get('/users', (req, res) =>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
})

// app method
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log("hitting the post", req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req,res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fruits/mangoes/fazli',(req, res) =>{
    res.send("Yummy Yummy tok marka fazli")
})

app.listen(port, () =>{
    console.log('Listening to port', port)
})
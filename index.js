const express = require('express');
const Connection = require('./src/libs/user.libs');
const userRouter = require('./src/route/user.route');


const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send('App is running...')
})

app.use('/user', userRouter)

const PORT = 8090;

app.listen(PORT, ()=> {
    console.log(`app is running on PORT ${PORT}`);
})

Connection()


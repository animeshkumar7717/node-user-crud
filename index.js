const express = require('express');
const Connection = require('./src/libs/book.libs');
const bookRouter = require('./src/route/book.route');


const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send('App is running...')
})

app.use('/book', bookRouter)

const PORT = 8090;

app.listen(PORT, ()=> {
    console.log(`app is running on PORT ${PORT}`);
})

Connection()


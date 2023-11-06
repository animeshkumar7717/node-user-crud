const mongoose = require('mongoose');


const Connection = () => {
    const mongo_url = 'mongodb://localhost:27017/Books';
    mongoose.connect(mongo_url).then((data)=>{
        console.log(`mongodb connected successfully: ${data.connection.host}`);
    }).catch((err)=> {
        console.log(`Unable to connect with dataBase: `, err);
    })

}

module.exports = Connection
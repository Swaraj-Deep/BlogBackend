const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
    res.status(200).json({message: "Okay"});
})
app.listen(3000, () => {
    console.log('Server Started!');
})

const express = require('express');
const dotenv = require('dotenv');
const blogController = require('./routes/blogController/blogController')
const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res, next) => {
    res.status(200).json({message: "Okay"});
});

app.use('/blogs', blogController);

app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`);
});

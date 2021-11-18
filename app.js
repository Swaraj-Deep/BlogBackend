const express = require('express');
const dotenv = require('dotenv');
const exceptionHandler = require('./exceptions/exceptionHandler');
const blogController = require('./routes/blogController/blogController');

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/blogs', blogController);
app.get('/', (req, res, next) => {
    res.status(200).json({message: "Okay"});
});

app.use(exceptionHandler);

app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`);
});

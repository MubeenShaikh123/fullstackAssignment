const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config({path:'./.env.local'})
const connect = require('./dbConnection/connect');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => {
    res.send('Server is running');
});

app.use('/cards', require('./router/routes'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

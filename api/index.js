const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:42069',
}));

app.get('/test', (req,res) => {
    res.json('test.ok')
});

app.listen(42069);
//We are at 51 minutes
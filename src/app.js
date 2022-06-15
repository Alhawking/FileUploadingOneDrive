const express = require('express');
const webhookRoutes = require('./routes/webhook/update');
const app = express();
app.listen(8080, () => {
    console.log('server is running on port 8080')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.use('/webhook', webhookRoutes);

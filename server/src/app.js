const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
// const socket = require('socket.io');
const mongoose = require('mongoose');
const webPush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

mongoose.connect('mongodb://localhost:27017/dpwh', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webPush.setVapidDetails('mailto:test@example.com', publicVapidKey, privateVapidKey);

app.post('/subscribe', (req, res) => {
  const subscription = req.body

  res.status(201).json({});

  const payload = JSON.stringify({
    title: 'test',
  });


  webPush.sendNotification(subscription, payload)
    .catch(error => console.error(error));
});

app.set('port', 4343 || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});


app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

// const server = require('http').createServer(express);

// const io = socket('socket.io')(server);
// io.on('connection', (socket) => {
//   console.log('Made socket connection');

//   socket.on('disconnect', () => {
//     console.log('Made socket disconnected');
//   });

//   socket.on('send-notification', (data) => {
//     io.emit('new-notification', data);
//   });
// })




module.exports = app;

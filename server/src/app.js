const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
// const socket = require('socket.io');
const mongoose = require('mongoose');
const webPush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./model/user');

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
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});




const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;


app.post('/subscribe/:id', async(req, res) => {
  const subscription2 = req.body;
  const userId = req.params.id;
  const item = await User.findOne({ _id: userId });
  const subscription ={
    endpoint: 'https://fcm.googleapis.com/fcm/send/AAAAofYPB5Q:APA91bFPFURmMc0XVLFcCEHWMiHjGVguSxaRZpy1XfuZ7cq4nZHIjbdcv5pG3DgrTYtJKN_3kOvyx0cnNqWX919bRYhHwLffIqCd10Zi57dqj-zFsa0UCe98aK14Vh9flaKSKRSNbnMv',
    expirationTime: null,
    keys: {
      p256dh: 'BBaeWcuRxY_Ukiwmg9Ow8TB4ykoZd9G39IgxlocqgFR-cA3HQ3lZaWJ6KNBiGDqr1WeX8JJuoDkgtrtraX7Im_0',
      auth: 'b_L8R-5kFhUIM6M0DR8wgQ'
    }
  }

  if (item) {
    await User.update({
      _id: userId
    }, { $set: { device: subscription2 } });
  }

  webPush.setVapidDetails(
    'mailto:web-push-book@gauntface.com',
    publicVapidKey,
    privateVapidKey
  );

  res.status(201).json({});

  const payload = JSON.stringify({
    title: userId,
  });

  



  webPush.sendNotification(subscription, payload).then((res) => {
    console.log(res)
  }).catch(error => console.error(error));
});


app.use('/api/v1', api);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);



app.set('port', 4343 || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
module.exports = app;

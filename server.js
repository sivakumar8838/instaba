const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { MONGODB_URL, PORT } = require('./utils/confing'); 
const loginRouter = require('./controller/loge');
const userRouter = require('./controller/users');
const phoneRouter = require('./controller/Phones');



const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/login',loginRouter);
app.use('/api/phone',phoneRouter);

mongoose.set('strictQuery', false);

mongoose.connect(MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB...');
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.log('Error connecting to MongoDB:', error);
  });

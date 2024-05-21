const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const teamRoutes = require('./routes/teamRoutes');
const view = require('./views/index');

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true,dbName: 'microser' })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(express.json());

app.get('/', view);
app.use('/api/teams', teamRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

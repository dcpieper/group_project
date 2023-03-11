const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('smeco');
    const resultsCollection = db.collection('results');
    const resultsRouter = createRouter(resultsCollection);
    app.use('/api/results', resultsRouter);
    const noticeBoardCollection = db.collection('noticeBoard');
    const noticeBoardRouter = createRouter(noticeBoardCollection);
    app.use('/api/notices', noticeBoardRouter);
    const countriesCollection = db.collection('countries');
    const countriesRouter = createRouter(countriesCollection);
    app.use('/api/countries', countriesRouter);
    const factsCollection = db.collection('facts');
    const factsRouter = createRouter(factsCollection);
    app.use('/api/facts', factsRouter);
  })
  
  .catch(console.err);

  

app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});


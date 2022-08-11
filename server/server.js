const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createCardsRouter = require('./helpers/create_cards_router.js');

MongoClient.connect('mongodb://0.0.0.0:27017', {useUnifiedTopology: true})
    .then((client) => {
        const db = client.db('uno');
        const cardsCollection = db.collection('cards');
        const cardsRouter = createCardsRouter(cardsCollection);
        app.use('/api/cards', cardsRouter);
    })
    .catch(console.err);

app.listen(9000, function() {
    console.log(`Listening on port ${this.address().port}`);

});
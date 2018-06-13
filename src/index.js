import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//listen on port 3000
app.listen(3000, () => {
  console.log('App listening port 3000!'); // eslint-disable-line no-console
});

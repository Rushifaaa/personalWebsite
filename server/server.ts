import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

const app = express();
//app.use(bodyParser.urlencode({export: false}));
app.use(express.static("public"));

app.route('/')
    .get((req, res) => {
        res.send("Hello World");
    });

app.listen('80', (req, res) => {
   console.log("Server is listening on port 3000");
});
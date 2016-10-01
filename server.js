import express from 'express';

let app = express();

app.use(express.static('public'));

app.listen(3000);
console.log('Node server started on port 3000');

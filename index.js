const express = require('express');
const app = express();

app.get("/", (req, res) => {
   // console.log(request);
   res.send('<h1>My First Node Server!! HELLO!!!</h1>');
});

app.get('/contact', (req, res) => {
      res.send('hi please do contact me: xyz@gmail.com');
});

app.listen('3000', () => {
   console.log("server started on port 3000");
});


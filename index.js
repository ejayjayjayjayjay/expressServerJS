const express = require('express');
const app = express();

app.get("/", (request, response) => {
   console.log(request);
   response.send('hello world!');
});

app.listen('3000', () => {
   console.log("server started on port 3000");
});


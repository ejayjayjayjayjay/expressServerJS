const express = require('express');
const app = express();

app.get("/", (req, res) => {
   // console.log(request);
   res.send('<h1>My First Node Server!! HELLO!!!</h1>');
});

app.get('/contact', (req, res) => {
   res.send('hi please do contact me: xyz@gmail.com');
});

app.get('/aboutPage', (req, res) => {
   res.send('Josell Vibar: Web Developer');
});

app.get('/hobbiesPage', (req, res) => {
   res.send(`
   <div>
      <h1>Things I Love Doing</h1>
      <ol>
         <li>Reading Manga</li>
         <li>Playing Valorant/dota</li>
         <li>study webdev</li>
      </ol>
   </div>`);
});

app.listen('3000', () => {
   console.log("server started on port 3000");
});


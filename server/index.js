//index.js
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// Parse URL encoded data that might come from a form
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


const db = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'DukeqHenry19043-12',
  database: 'musictalk'
});


console.log(app)
app.post('/signup', (req, res) => {
  // res.send('Hello from our server!')
  const username = req.body.username;
  const password = req.body.password;
  console.log('req ', req)

  db.query(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        // console.log(result)
        res.send({ username: username })

      }
    }
  )
})

app.listen(8080, () => {
  console.log('server listening on port 8080')
})
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let todos = [];

app.get('/', (req, res) => {
  res.render('index', { todos });
});

app.post('/add', (req, res) => {
  const newTodo = req.body.todo;
  todos.push(newTodo);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Todo app listening at http://localhost:${port}`);
});

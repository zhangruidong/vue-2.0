const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use( bodyParser.json() );

let taskList = [
  {title: '吃饭', done: true},
  {title: '睡觉', done: false},
  {title: '打豆豆', done: false}
];

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,POST,OPTIONS');
  if(req.method=="OPTIONS") {
    res.send(200)
  } else {
    next();
  }
})

app.get('/', (req, res) => {
  res.json(taskList);
})

app.post('/add', (req, res) => {
  taskList.push({
    title: req.body.title,
    done: false
  });
  res.json({
    code: 0,
    message: '添加成功'
  })
});

app.listen(9090, '0.0.0.0');

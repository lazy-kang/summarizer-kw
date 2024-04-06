const express = require('express');
const app = express();
const path = require('path');


app.listen(8080, function () {
  console.log('http://localhost:8080')
}); 

// app.use(express.json());
// var cors = require('cors');
// app.use(cors());

app.use(express.static(path.join(__dirname, 'summarizer-web-main/dist')));

app.get('/', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/summarizer-web-main/dist/index.html'));
  });

//   app.get('/api/data', (req, res) => {
//     res.json({ message: 'json 형식으로 데이터 뽑기' });
//   });

//   app.get('*', function (요청, 응답) {
//     응답.sendFile(path.join(__dirname, '/summarizer-web-main/dist/index.html'));
//   });
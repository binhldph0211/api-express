var express = require('express');  // import express from "express";
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
var cors = require('cors');
var multer = require('multer');

var app = express();
var port = 5000;

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    }
  })
  
const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('file'), function (req, res) {
      const file = req.file;
      console.log('file binh ',file);
     return res.status(200).json(file.filename);
  })

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.listen(port, () => console.log('server đã chạy'));



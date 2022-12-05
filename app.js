const express = require('express')
const formidable = require('formidable');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const routes = require('./router/index')
const { uploadFile } = require('./config/s3.js')

const HOST = process.env.HOST
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send(`Server running on ${HOST}:${PORT}`)
  })
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors({origin:"*"}))
app.use("/api/v1", routes());

app.post('/uploadImage', (req, res, next) => {
    const form = formidable({ multiples: true });
  
    form.parse(req,async (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }

      let pathFile = {};

      pathFile.path = files.files.filepath;
      pathFile.originalFilename = files.files.originalFilename;

      const result = await uploadFile(pathFile)
      const url = `https://blogcuentame.s3.us-east-2.amazonaws.com/${pathFile.originalFilename}`;

      res.json({ url });

    });
  });

app.listen(PORT, () => {
    console.log(`Server running on ${HOST}:${PORT}`)
});


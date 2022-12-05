const express = require('express')
const formidable = require('formidable');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const routes = require('./router/index')
const {swaggerDocs : swaggerDocsV1} = require("./router/swagger")

const HOST = process.env.HOST
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send(`Server running on ${HOST}:${PORT}`)
  })
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors({origin:"*"}))
app.use("/api/v1", routes());

app.listen(PORT, () => {
    console.log(`Server running on ${HOST}:${PORT}`)
    swaggerDocsV1(app,PORT)
});


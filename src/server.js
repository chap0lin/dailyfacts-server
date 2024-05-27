const express = require('express')
const fs = require("fs").promises
const app = express()
const port = 3456

app.use(express.static('static'))

const fileHandler = fs.open("likes.txt", "a+")


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/like/:id', async (req, res) => {
    const date = new Date()
    try {
        (await fileHandler).appendFile(`${date.toLocaleString()}| ${req.params.id}\n`)
        res.send(200)
    } catch(e) {
        console.log(e)
        res.send(500)
    }
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
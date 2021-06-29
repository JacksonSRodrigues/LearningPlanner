import express from 'express'

const PORT = process.env.PORT || 3000
const app = express()
app.listen(PORT)

app.use('/', (req, res, next) => {
    res.send(`<h1> Hello Jackson</h1>`)
})
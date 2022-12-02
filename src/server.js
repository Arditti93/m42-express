const express = require('express')
const app = express()

const port = process.env.PORT || 5001 

app.use('/static', express.static("public"))

app.get('/health', (req, res) => {
    try {
        res.json({message: "server is running at port 5001"})

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// app.get('/', (req, res) => {
//     res.send('Hello world')
// })

app.get('/', (req, res) => {
    try{
        res.send('<h1>Hello world</h1>')
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})


app.get('/html', (req, res) => {
    try{
        res.send('<h1>Hello world 2</h1>')
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}) 

app.get('*', (req, res) => {
    res.status(404).send('<h1> 404 page not found</h1>')
})




app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
import express from 'express'
import axios from 'axios'

const app = express()
const port = 3000
const api = 'http://localhost:4000'

app.use(express.urlencoded())

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(`${api}/filter`)
        res.render('index.ejs', {recepies: response.data})
    } catch (error) {
        console.log(error)
    }
})

app.post('/filter', async (req, res) => {
    try {
        const response = await axios.get(`${api}/filter?dosha=${req.body.dosha}&type=${req.body.type}`)
        res.render('index.ejs', {
            recepies: response.data, 
            filter: {
                dosha: req.body.dosha,
                type: req.body.type 
            }
        })
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})
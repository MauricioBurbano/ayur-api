import express from 'express'

const app = express()
const port = 3000

app.get('/random', (req, res) => {
    const index = Math.floor(recepies.length * Math.random())
    res.json(recepies[index])
})

app.get('/recepies/:id', (req, res) => {
    const id = req.params.id
    res.json(recepies.find(recepie => recepie.id === id))
})

app.get('/filter', (req, res) => {
    const dosha = req.query.dosha
    const meal = req.query.meal
    res.json(recepies.filter(recepie => {
        return (check(dosha, recepie.dosha) && check(meal, recepie.meal))
    }))
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

function check(query, objValue) {
    if (query === undefined) {
        return true
    } else return (query === objValue)
}

let recepies = [
    {
        id: '0.2583840753563593',
        dosha: 'vata',
        meal: 'breakfast',
        name: 'porridge',
        servings: 2,
        ingredients: [
            {
                ingredient: 'oat meal',
                quantity: 'one cup'
            }
        ],
        preparation: 'cook the oat meal'
    },
    {
        id: '0.9811337554661825',
        dosha: 'vata',
        meal: 'lunch',
        name: 'stew',
        servings: 2,
        ingredient: [
            {
                ingredient: 'rice',
                quantity: 'one cup'
            }
        ],
        preparation: 'cook the rice'
    },
    {
        id: '0.9839612513157023',
        dosha: 'pitta',
        meal: 'breakfast',
        name: 'coconut milk',
        servings: 2,
        ingredients: [
            {
                ingredient: 'coconut',
                quantity: 'one cup'
            }
        ],
        preparation: 'blender coconut with water'
    }
]
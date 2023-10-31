import express from 'express'

const app = express()
const port = 4000

const masterKey = '123ABC'

// app.get('/:id', (req, res) => {
//     const recepie = recepies.find(recepie => recepie.id === req.params.id)

//     res.json(recepie)
// })

app.get('/filter', (req, res) => {
    res.json(recepies.filter(recepie => {
        return (check(req.query.dosha, recepie.dosha) && check(req.query.type, recepie.type))
    }))
})

// app.post('/recepies', (req, res) => {
//     const {dosha, name} = req.body

//     const recepie = {
//         id: Math.random().toString(),
//         dosha: dosha,
//         name: name
//     }

//     recepies.push(recepie)

//     res.json(recepie)
// })

// app.put('/recepies/:id', (req, res) => {
//     const index = recepies.findIndex(recepie => recepie.id === req.params.id)

//     const {dosha, name} = req.body
    
//     const recepie = {
//         id: Math.random().toString(),
//         dosha: dosha,
//         name: name
//     }

//     recepies[index] = recepie

//     res.json(recepie)
// })

// app.patch('/recepies/:id', (req, res) => {
//     const index = recepies.findIndex(recepie => recepie.id === req.params.id)
//     const recepie = recepies[index]

//     const updatedRecepie = {
//         ...recepie,
//         dosha: req.body.dosha || recepie.dosha,
//         name: req.body.name || recepie.name
//     }

//     recepies[index] = updatedRecepie

//     res.json(updatedRecepie)
// })

// app.delete('/recepies/:id', (req, res) => {
//     const id = req.params.id
//     const index = recepies.findIndex(recepie => recepie.id === id)

//     if (index !== -1) {
//         recepies.splice(index, 1)
//         res.send('ok')
//     } else {
//         res.status(404).json({error: `A recepie with id of ${id} was not found`})
//     }

// })

// app.delete('/all', (req, res) => {
//     if (req.query.key === masterKey) {
//         recepies = []
//         res.send('ok')
//     } else {
//         res
//             .status(400)
//             .json({error: 'The key entered is invalid'})
//     }
// })

app.listen(port, () => {
    console.log(`api listening on port ${port}`)
})

function check(query, objValue) {
    if (query === undefined || query === 'All') {
        return true
    } else return (query === objValue)
}

let recepies = [
    {
        id: '0.2583840753563593',
        dosha: 'Vata',
        type: 'Meal',
        subType: 'Breakfast',
        name: 'Oat meal porridge',
        servings: 2,
        ingredients: [
            {
                ingredient: 'oat meal',
                quantity: 'one cup'
            }
        ],
        preparation: 'Cook the oat meal'
    },
    {
        id: '0.9811337554661825',
        dosha: 'Vata',
        type: 'Meal',
        subType: 'Lunch',
        name: 'Stew',
        servings: 2,
        ingredient: [
            {
                ingredient: 'rice',
                quantity: 'one cup'
            }
        ],
        preparation: 'Cook the rice'
    },
    {
        id: '0.9839612513157023',
        dosha: 'Pitta',
        type: 'Beverage',
        subType: 'Milk',
        name: 'Coconut milk',
        servings: 2,
        ingredients: [
            {
                ingredient: 'coconut',
                quantity: 'one cup'
            }
        ],
        preparation: 'Blender coconut with water'
    },
    {
        id: '0.7746168233887187',
        dosha: 'Vata',
        type: 'Beverage',
        subType: 'Smoothie',
        name: 'Berries smoothie',
        servings: 2,
        ingredient: [
            {
                ingredient: 'mixed berries (e.g., strawberries, blueberries, raspberries',
                quantity: 'two handfuls'
            },
            {
                ingredient: 'cinamon powder',
                quantity: 'one tea spoon'
            },
            {
                ingredient: 'vanilla stract',
                quantity: 'one tea spoon'
            },
            {
                ingredient: 'ginger powder',
                quantity: 'one pinch'
            },
            {
                ingredient: 'almond milk',
                quantity: 'two cups'
            },
            {
                ingredient: 'muscovado sugar',
                quantity: 'two table spoon'
            }
        ],
        preparation: 'Cover berries and spicies with water and bring to a boil. Blend preparation with the almond milk'
    }
]
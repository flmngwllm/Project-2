const Tournaments = require('../models/Tournaments')
const Thread = require('../models/Thread')
const Posts = require('../models/posts')
// const User = require('..models/User')
const mongoose = require('./connection')

const canadaPo = new Posts ({
    post:"I missed it too",
    

})

const usPo = new Posts ({
    post:"You should get better",
    

})

const euPo = new Posts ({
    post:"It went out for me too",
    

})



const canadaTh = new Thread ({
    title:"Did any one catch the finals",
    posts:[canadaPo]

})

const UsTh = new Thread ({
    title:"Can't believe I lost again",
    posts:[usPo]

})

const EUTh = new Thread ({
    title:"What happened to the stream",
    posts:[euPo]

})

// let newTournaments = [
//     {
//         name: 'The Fall Classic',
//         location: 'Orlando, Fl',
//         date: '10/16/18 - 10/19/18',
//         description: 'Back again for another year',
//         games: 'Dragonball Fighterz'

//     },
//     {
//         name: 'Canada Cup',
//         location: 'Ontario, Canada',
//         date: '10/16/18 - 10/19/18',
//         description: 'Back again for another year',
//         games: 'Dragonball Fighterz, Smash Bros, Soul Calibur 6'

//     },
//     {
//         name: 'The Fall Classic',
//         location: 'Orlando, Fl',
//         date: '10/16/18 - 10/19/18',
//         description: 'Back again for another year',
//         games: 'Dragonball Fighterz'

//     },
// ]


// Tournaments.create(newTournaments).then(tournaments =>{
//     console.log('Saved Tournaments', tournaments)
// })

// Tournaments.remove()
// .then(() => console.log("Database seeded success"))
// .then(() => mongoose.connection.close())

Thread.remove({})
// inserts products into kroger, target, etc..
    .then(() => Posts.insertMany([canadaPo, euPo, usPo]))
    .then(() => canadaTh.save())
    .then(() => EUTh.save())
    .then(() => UsTh.save())
    .then(() => console.log("Database seeded success"))
    // to close out seed.js
    .then(() => mongoose.connection.close())
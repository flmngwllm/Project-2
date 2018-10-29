const Tournaments = require('../models/Tournaments')

let newTournaments = [
    {
        name: 'The Fall Classic',
        location: 'Orlando, Fl',
        date: '10/16/18 - 10/19/18',
        description: 'Back again for another year',
        games: 'Dragonball Fighterz'

    },
    {
        name: 'Canada Cup',
        location: 'Ontario, Canada',
        date: '10/16/18 - 10/19/18',
        description: 'Back again for another year',
        games: 'Dragonball Fighterz, Smash Bros, Soul Calibur 6'

    },
    {
        name: 'The Fall Classic',
        location: 'Orlando, Fl',
        date: '10/16/18 - 10/19/18',
        description: 'Back again for another year',
        games: 'Dragonball Fighterz'

    },
]


Tournaments.create(newTournaments).then(tournaments =>{
    console.log('Saved Tournaments', tournaments)
})
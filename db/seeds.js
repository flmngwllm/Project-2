const Tournaments = require('../models/Tournaments')
const mongoose = require('./connection')

let newTournaments = 
    {
        name: 'The Fall Classic',
        location: 'Orlando, Fl',
        date: '10/16/18 - 10/19/18',
        description: 'Back again for another year',
        games: 'Dragonball Fighterz'

    },
    {
        name: 'The Fall Classic',
        location: 'Orlando, Fl',
        date: '10/16/18 - 10/19/18',
        description: 'Back again for another year',
        games: 'Dragonball Fighterz'

    },
    {
        name: 'The Fall Classic',
        location: 'Orlando, Fl',
        date: '10/16/18 - 10/19/18',
        description: 'Back again for another year',
        games: 'Dragonball Fighterz'

    }


//Tournaments.create(newTournaments).then(tournaments =>{
    //console.log('Saved tournaments', tournaments)

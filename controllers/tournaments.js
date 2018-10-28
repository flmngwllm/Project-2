const Tournaments = require('../models/Tournaments')

const tournamentsController = {

    index: (req, res) =>{
        Tournaments.find().then((tournaments) => {
            res.render('tournaments', {tournaments: tournaments
            })

        })
    
    },


    create: (req, res) => {
        Tournaments.create(req.body).then((newTournaments) =>{
            res.redirect(`/${newTournaments._id}`)
        })
    }


}


module.exports = tournamentsController
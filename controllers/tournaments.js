const Tournaments = require('../models/Tournaments')

const tournamentsController = {

    index: (req, res) => {
        Tournaments.find().then((tournaments) => {
          
          res.render('tournaments/index', {
            tournaments: tournaments
          })
        })
      },


      info: (req, res) => {
        Tournaments.findById(req.params.id).then((tournaments) =>{
          res.render('tournaments/info', {tournaments: tournaments})
        })
      },


    // create: (req, res) => {
    //     Tournaments.create(req.body).then((newTournaments) =>{
    //         res.redirect(`/${newTournaments._id}`)
    //     })
    // }


}


module.exports = tournamentsController
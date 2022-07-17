const Model = require('../models/model')
class Controller {
    static home (req, res) {
        res.render('home')
    }


    static about (req, res) {
        res.render('about')
    }

    static service (req, res) {
        res.render('service')
    }

    static frppaneltank(req, res){
        res.render('frppaneltank')
    }

    static frpcylindertank(req, res){
        res.render('frpcylindertank')
    }

    static frpstptank(req, res){
        res.render('frpstptank')
    }

    static gallery (req, res){
        Model.getDataGallery((err, data) => {
            if(err) res.send(err)
            else res.render('gallery', {data})
        })
    }
}

module.exports = Controller
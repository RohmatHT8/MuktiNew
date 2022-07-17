const fs = require('fs')

class Gallery {
    constructor(jenis, name){
        this.jenis = jenis
        this.name = name
    }
}

class Model {
    static getDataGallery (cb) {
         fs.readFile('./data/gallery.json', 'utf-8',(err, data) => {
            if(err) cb(err)
            else {
                data = JSON.parse(data).map(el => {
                    return new Gallery (el.jenis, el.name)
                })
                cb(null, data)
            } 
         })
    }
}

module.exports = Model

const mogoose=require('mongoose')

let albumModel=mogoose.model("Album")
function addAlbum(album,callback) {
  let b=  albumModel.create(album,function (err,newBookDoc) {
        if(!err) callback(newBookDoc.toObject())
    })
}

function findAllAlbum(callback) {
    albumModel.find({}).exec(function (err,albums) {
        if(!err) callback(albums)
    })
}

function deleteAlbum(id,callback) {
    albumModel.findByIdAndRemove(id,function (err) {
       if(!err) callback({})
   })
}

module.exports={addAlbum,deleteAlbum,findAllAlbum}

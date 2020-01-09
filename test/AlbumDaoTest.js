const mongoose=require('mongoose')
require('../model')
let albumDao=require('../dao/AlbumDao');
const assert=require('assert')

describe("测试AlbumDao",function () {
   before(function () {
      mongoose.connect('mongodb://localhost/demo02',function (err) {

      })
   })
    after(function () {
        mongoose.disconnect()
    })

    it("测试添一张专辑",function (done) {
        let album={name:'my first album',price: 200}
        albumDao.add
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
(album,function (nb) {

            assert.ok(nb._id!=null)
            done()
        })
    })
    it('测试查询所有专辑',function (done) {
        albumDao.findAllAlbum(function (albums) {
           assert.ok(albums.length>0)
           albums.forEach(album=>console.log(album._id))
           done()
       })
    })
    it("测试删除",function (done) {
        albumDao.deleteAlbum("5e1680416847d8312b777253",function ({}) {
            console.log({})
            done()
        })
    })


})
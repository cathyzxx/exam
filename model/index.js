const mongoose=require('mongoose')
let BookSchema={name:String,price:Number}
let Customer={name:String,password:String,score:Number}
let AlbumSchema={
    album_id:Number,
    album_name:String,
    public_time:Date,
    week:Number,
    price:Number,
    cover:String,
    singers:{singer_id:Number,singer_name:String},
}
mongoose.model("Book",BookSchema)
mongoose.model("Customer",Customer)
mongoose.model("Album",AlbumSchema)


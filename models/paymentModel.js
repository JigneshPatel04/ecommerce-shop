const moongose = require('mongoose')

const paymentSchema = new moongose.Schema({
    user_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    paymentID:{
        type:String,
        required:true
    },
    address:{
        type:Object,
        required:true
    },
    cart:{
        type:Array,
        default:[]
    },
    status:{
        type:Boolean,
        default:false
    },
},{
    timestamps:true
})

module.exports = moongose.model("Payments",paymentSchema)
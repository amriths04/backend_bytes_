import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
// username : String,
// email : String ,
// isActive : Boolean,
username : {
type : String,
required:true,
unique:true,
lowercase:true
},
email : {
type:String,
required : true,
lowercase:true,
unique:true
},
password : {
type :String,
// required :[true, "Password is required"],
required :true

}
}
,
{timestamps:true})

export const User = mongoose.model("User",userSchema)

//stores in mongodb as users


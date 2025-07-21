import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name:{
        type : String , 
        required : true, 
        maxLength : 50
    },

    email:{
        type : String , 
        required : true, 
        maxLength : 50
    },

    message:{
        type : String , 
        required : true, 
        maxLength : 1000
    },
    createdAt:{
        type : Date,
        default : Date.now,
    },
})

const UserModel = model("User", UserSchema);


export default UserModel;
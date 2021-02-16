import mongoose from 'mongoose';


/*
{
    "First name": "Jack",
    "Last Name": "Prior",
    "Permissions": "Author" //technically can be an array of role sets :)
    "Date Created": type date
}

*/
const userSchema = new mongoose.Schema({
    FirstName: { type: String, required: true,},
    LastName: { type: String, required: true,},
    Permissions: { type: String, }, //will be an array of strings

        dateCreated: {
            type: Date,
            default: Date.now,
        },
    
    },
    
    { collection : 'test' }
    
    );
        
    const User : mongoose.Model<any> = mongoose.model('User', userSchema);
    export = User;    
    
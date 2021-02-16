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
    //can't attach a validator it breaks :)
    //I wasn't adding type instead I just said string :)
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
    
        
    //it worked I think?
    const User : mongoose.Model<any> = mongoose.model('User', userSchema);
    export = User;

    //is : mongoose.model<any> the type declaration needed here
    
    
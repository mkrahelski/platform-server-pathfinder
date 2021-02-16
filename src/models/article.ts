import mongoose from 'mongoose';

const childSchema = new mongoose.Schema({     
    name: { type: String, required: true } 
});

  

//needs  a path?

const articleSchema = new mongoose.Schema({

    name: { type: String, required: true,},
    title: { type: String, required: true,},
    body: { type: String, required: true,},
     
    date: {
        type: Date,
        default: Date.now,
    },

},

    { collection : 'test' }

);

// var User : mongoose.Model<any> = mongoose.model("User", userSchema);

const Article : mongoose.Model<any> = mongoose.model('Article', articleSchema);
export = Article;










//test schema



// module.exports = mongoose.model('Article', articleSchema) 
// export const mongooseArticle = mongoose.model('Article', articleSchema);


//this model allows to interact exactly with the database.
//using this schema.
//module.exports is the export functionality
//for some reason find is not showing up



//extended article profile
/*
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
*/   
/*
    submitted: {
        type: Boolean,
        default: true,
    },

    views: {
        type:Number,
        default: 1,
    },

    category: {
        Type:String,

    },

    tags:{
        Type:Array,
    },

    rating: {
        type: Number,
        
    },

*/


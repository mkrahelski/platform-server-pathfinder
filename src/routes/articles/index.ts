import express from 'express';
import req = require('express/lib/request');
import res = require('express/lib/response');
import mongoose from 'mongoose';

// import req from 'express/lib/request';
// import res from 'express/lib/response';
const router = express.Router(); //don't forget the () :)
module.exports = router;
// import  from '../../models/article';
//  import { articleSchema } from '../../models/article';
//  import { articleSchema as Article } from '../../models/article';
// const Article = require('../../models/article');

import Article = require("../../models/article");



//this is right, but also something is broken.....

// import * as Article from 'module';
//"allowSyntheticDefaultImports": true 
// import { mongooseArticle } from '../../models/article';

// import dotenv from 'dotenv';
// import mongoose from 'mongoose'; 



//mongoose should do effectively the same thing to connect to mongo

//model pulled in. It says it can work as an import this is a lie 

//index is run automatically :)

//starting here makes, sense than you abstract out to far more complicated machiner that brad is using

//get all - this starts at /articles any more and you have to always remember that start
//also remember the arrow function identifier (params)returntype => {action}

// request & response + you need type : any or really whatever is needed.

//update now working with asyncs
//const article = Article.find(); we set a variable to model? and then a run a find. for what all models?
//you can maybe export it? or use atoms?????

//I am replacing err, with error, because my req. and res where not doing well.


router.get('/', async (request:any, response:any) => {
    
    try {
        const articles = await Article.find();

        response.json(articles);        

    } catch (error) {
        response.status(500).json({message: error.message})
    }
 
    response.send("So the JSOn thing is just like  JSON with one property :) err.message lel 500 code, server failure")
})
//seond part sends articles to user
//500 means we fucked up.

//try and catch hehehehehe.
//this is pathologic levels of fun
//and certainly arcane, and if anything programming will only become more arcane as time passes on.
//Techno-Feudalisms : only those who can operate the machinery of the future will be able to escape
//the rest's fate is serfdom before what is effectively magic they do not understand
//like the magi of old who wrote and thus 'made reality'



//get one
//the colon : is a parameter in that kind of request O_O

//get middleware test
//call it in the center.
//broken, bummer //doesn't work would need another way to go.
//why no async? here when required in delete?
router.get('/:id', getArticle, async (req:any, res:any) => {
     res.json(res.Article)
//the get works it's just not bouncing it back :P

try {
    const gotArticle = Article;

    res.json(res.gotArticle);        

} catch (error) {
    res.status(500).json({message: error.message})
}







//wonderfully this gets me back the same thing which is nothing :I
    // response.json(response.articles);        

    //gets the name of the subscriber
 //is it the wrong article? article vs Article :|

    // response.send(request.params.id);
//not super sure on what response.Article means
})

    // req.params.id
    //this gives acess to the parameters.
    //using paramaters breaks it for some reason /shrug

//"it turned out that the order of the middleware counts here...i just moved the app.use(express.json()) before 
//the routes add ,,,,and it went fine....thanks Subburaj...appreciate your help :)"
//if this is the case, I am leaving this as a testament to my stubborness, luck, and agony

//post 1 - create 1
//async because we don't just create, it has to be trigerred randomyl at run time :)
//not sure why new article takes javascript object.
router.post('/', async (request:any, response:any) => {
  
    //removed async :) now instead of socket hang it breaks
    //const article = db.model('Actor', )
    //db.db.save
    //database meaning connection, database meaning database, save meaning save? O_O

//the issue starts at the name
//https://stackoverflow.com/questions/54890608/how-to-use-async-await-with-mongoose
//maybe it is an await that it's not waiting for it to be defined :I
    const article = new Article({
            //is that the problem that the name at the end is broken?
            //the problem is exactly here....
            //Cannot read property name of undefined? but name is defined? in article?
            name: request.body.name,
            title: request.body.title,
            body: request.body.body,
        })
    try{    
        const newArticle = await article.save();
        response.status(201).json(newArticle)

    } catch (error) {
        response.status(400).json({message: error.message})
    }

})
//        response.json(newArticle); basically yeets it back at us if created :) (201 sucessful ceatine)
//default is 200, (just kinda vague.) 201 is more specific
//once you condition yourself, past the harsh learning floor this is a lot like from the depths,
//react even has nicer visuals
//and tbh, it kinda becomes fun. Though I can see why not everyone would do this. 
//400 the user fucked up, not the server :)
//wrapping in an object.



//edit 1 - you can use patch or put, put I think does a full replacement, while patch conditional? idk
router.patch('/', getArticle, async (request:any, response:any) => {
//resetting to the new request, the new form along
//the old id, to basicall edit the article;
    if(request.body.name != null) {
        response.Article.name = request.body.name;
    }

    if(request.body.title != null) {
        response.Article.title = request.body.title;
    }

    if(request.body.body != null) {
        response.Article.body = request.body.body;
    }

    try {
        const updatedArticle = await response.Article.save()
        response.json(updatedArticle)

    } catch (error) {
        response.status(400).json({message: error.message})
    }

})

//delete 1
//the post one works, but anything id
//because middle ware has an error in it
router.delete('/:id', getArticle, async (request:any, response:any) => {

    try{
        await response.Article.remove()
        response.json({message: 'deleted article'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }

})

//middleware
//next just calls the next piece of code.
//async because acess is none sequential, and conditional
async function getArticle(request:any, response:any, next:any){ //to use middleware, call it in the param, 


    //hmmm, so originally it didn't have mongoose.model, maybe it's not supposed to be a model?
    //well technically it isn't right? because 

    //: mongoose.Model<any> so instead of confusing it with a model, I made it an any makes sense
    //now it's an any, instead of a mongoose model, which it also is a response.article.
    
    let article;
    //= () => { if(!Article == undefined){
        // return Article
    // }}
    
    //thank christ amazing! // then we can call response.article and it works in other functions
//kinda wonky, possibly undefined, article, than at the end. response.article = article
    //"Cannot read property 'findById' of undefined" //shrug
try{    //broken, possibly wrong article :) I think// fixed, smol article,
    //it needed not interrupt the other thing
        article  = await Article.findById(request.params.id)
        
        if(article == null){ //collected A.. to a..
            return response.status(404).json({ message: 'Article not found'});
        }

    } catch (error) {
        return response.status(500).json({ message: error.message});

    }//corrected Article to article below 
    response.article = Article;

    next(); //just allows us to do the next thing 
}



/*
Get all - retrieve all
Get 1 - retrieve one
Post 1 - create 1
Patch 1 - update 1
Delete 1 - extinct 1
*/
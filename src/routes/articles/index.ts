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


// import * as Article from 'module';
//"allowSyntheticDefaultImports": true 
// import { mongooseArticle } from '../../models/article';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose'; 




router.get('/', async (request:any, response:any) => {
    
    try {
        const articles = await Article.find();

        response.json(articles);        

    } catch (error) {
        response.status(500).json({message: error.message})
    }
 
    response.send("err.message 500 code, server failure")
})





//get middleware test
//call it in the center.
//why no async? here when required in delete?
router.get('/:id', getArticle, async (req:any, res:any) => {
     res.json(res.Article)
//the get works it's just not bouncing it back

try {
    const gotArticle = Article;

    res.json(res.gotArticle);        

    }catch (error) {
    res.status(500).json({message: error.message})
    }


})


router.post('/', async (request:any, response:any) => {

    const article = new Article({
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


router.patch('/', getArticle, async (request:any, response:any) => {

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

    
    let article;
    //= () => { if(!Article == undefined){
        // return Article
    // }}
    
    try{  
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
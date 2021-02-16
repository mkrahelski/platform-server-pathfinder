/*
import mongoose from 'mongoose';


const getArticle = async function getArticle(req:any, res:any, next:any){ //to use middleware, call it in the param, 

    //hmmm, so originally it didn't have mongoose.model, maybe it's not supposed to be a model?

    let Article: mongoose.Model<any> // then we can call response.article and it works in other functions
//kinda wonky, possibly undefined, article, than at the end. response.article = article
    //"Cannot read property 'findById' of undefined"
try{    //broken
        Article = await Article.findById(req.params.id)

        if(Article == null){
            return res.status(404).json({ message: 'Article not found'});
        }

    } catch (error) {
        return res.status(500).json({ message: error.message});

    }
    res.Article = Article;
    next();
}

*/
module.exports.noticias=function(app , req , res){
   
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasDAO(connection);
    
    noticiasModel.getNoticias(function(error,result){		 	
     res.render('noticias/noticias',{noticias:result});
     //res.send(result);
    });

}

module.exports.noticia=function(app , req , res){

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasDAO(connection);
    
    noticiasModel.getNoticia(function(error,result){	
     res.render('noticias/noticia',{ noticia : result });
 });

}

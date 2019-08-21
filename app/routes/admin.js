module.exports = function(app){
	app.get('/formulario_inclusao_noticias',function(req,res){
		app.app.controllers.admin.formulario_inclusao_noticias(app,req,res)
	}); 
	
	app.post('/noticias/salvar', function(req,res){
		app.app.controllers.admin.noticias_salvar(app,req,res);
	});		
}
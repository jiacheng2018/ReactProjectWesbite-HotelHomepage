//direction to dev and production mode
if(process.env.NODE_ENV==='production'){
   module.exports=require('./prod');
}else{
    module.exports=require('./dev');
}
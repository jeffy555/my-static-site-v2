const express=require('express'), cors=require('cors'), app=express();
app.use(cors()); app.use(express.json());
const notes=[{id:1,title:'Welcome',content:'First note'},{id:2,title:'Azure',content:'Deployed on Azure App Service'}];
app.get('/health',(req,res)=>res.json({status:'ok',version:'1.0.0',timestamp:new Date().toISOString()}));
app.get('/api/notes',(req,res)=>res.json(notes));
app.get('/api/notes/:id',(req,res)=>{const n=notes.find(x=>x.id===parseInt(req.params.id));n?res.json(n):res.status(404).json({error:'Not found'})});
app.listen(process.env.PORT||3000);
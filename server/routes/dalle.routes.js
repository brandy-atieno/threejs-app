import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';
dotenv.config();
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});
const router = express.Router();
router.get('/api/v1/dalle',(req,res) =>{
    res.status(200).json({message:'Hello from DALL.E ROUTES'});
})
router.post('/api/v2', async(req,res)=>{
    try{
const {prompt}=req.body;
const response= await openai.createImage({
    prompt,
    n:1,
    size:'1024*1024',
    response_format:'b64_json'
})
const image =response.data.data[0].b64_json
res.status(200).json({photo:image})
    }
    catch(error){
        console.log(error);

        res.status(500).json({message:'Sothing went wrong'});
    }
})
export default router;
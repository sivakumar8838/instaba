const express = require('express');
const Phone = require('../model/Phone');
const phoneRouter = express.Router();

const phonecontroller = {
    phone: async (req, res) => {
        try{
            const phones = await Phone.find()
            return res.json(phones);
        }catch(error){
            console.error(error);
            return res.json({message:error.message});
        }
    },
    // getphone: async (req, res) => {
    //     try{
    //    const {id} = req.params;
    //    const songs = await 
    //     }catch(error){

    //     }
    // }
}
phoneRouter.get('/', phonecontroller.phone);
module.exports = phoneRouter;
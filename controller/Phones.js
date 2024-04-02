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
}
phoneRouter.get('/', phonecontroller.phone);
module.exports = phoneRouter;
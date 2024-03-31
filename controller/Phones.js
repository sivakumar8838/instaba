const express = require('express');
const Phone = require('../model/Phone');
const phoneRouter = express.Router();

const phonecontroller = {
    phone: async (req, res) => {
        try{
            const {id} = req.params;
            const phones = await Phone.findById(id)
            return res.json(phones);
        }catch(error){
            console.error(error);
            return res.json({message:error.message});
        }
    },
}
phoneRouter.get('/:id', phonecontroller.phone);
module.exports = phoneRouter;
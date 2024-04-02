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
    phoneid: async (req, res) => {
        try {
            const {id} = req.params;
            const user = await Phone.findById(id);
            return res.json(user);
        } catch (error) {
            console.error(error);
            return res.json({message: error.message});
        }
    }
}
phoneRouter.get('/', phonecontroller.phone);
phoneRouter.get('/:id', phonecontroller.phoneid);
module.exports = phoneRouter;
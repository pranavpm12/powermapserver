const express = require('express');
const stationModel = require('../models/stationModel');
const stationRouter = express.Router();


stationRouter.get('/my-stations/:login_id', async (req, res) => {
    try {
        const { login_id } = req.params;
        const userList = await stationModel.find({Owner_id:login_id})
        if (userList[0]) {
            return res.status(200).json({
                success: true,
                data: userList,
            });
        } else {
            return res.status(400).json({
                success: false,
                message: 'No data found',
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }



})

stationRouter.get('/getchargingstation/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const station = await stationModel.findOne({_id:id})
        if (station) {
            return res.status(200).json({
                success: true,
                data: station,
            });
        } else {
            return res.status(400).json({
                success: false,
                message: 'No data found',
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }



})









module.exports = stationRouter
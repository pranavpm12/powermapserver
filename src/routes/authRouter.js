const express = require('express');
const userModel = require('../models/userModel');
const stationModel = require('../models/ownerModel');
const loginModel = require('../models/loginModel');
const ownerModel = require('../models/ownerModel');

const authRouter = express.Router();

authRouter.get('/login', (req, res) => {
    console.log(req.query);
    const logindata = {
        Username: req.query.Username,
        Password: req.query.Password
    };
    res.send(logindata);
});

authRouter.post('/userregistration', async (req, res) => {
    try {
        console.log(req.body);

        const oldEmail = await userModel.findOne({ Email: req.body.Email })
        if (oldEmail) return res.status(400).json({ success: false, error: true, message: 'Email id already exists' });

        const oldMobile = await userModel.findOne({ PhoneNumber: req.body.PhoneNumber })
        if (oldEmail) {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'mobile number already exists'
            });
        }
        const oldUser = await loginModel.findOne({ username: req.body.username })
        if (oldUser) {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'User already exists'
            });
        }


        const loginData = {
            username: req.body.username,
            password: req.body.password,
            role: 'user',
            status: 'approved'
        }

        const saveLogin = await loginModel(loginData).save()




        const userregisterdata = {
            login_id: saveLogin._id,
            Name: req.body.Name,
            Email: req.body.Email,
            PhoneNumber: req.body.PhoneNumber,
            state: req.body.state,
            district: req.body.district
        };

        const saveUser = await userModel(userregisterdata).save()

        if (saveUser) {
            return res.status(200).json({
                success: true,
                error: false,
                message: 'Registration Completed',
                data: saveUser
            });
        }
        else {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'Registration Failed',
                data: error
            });
        }


    } catch (error) {

    }
});

authRouter.post('/chargingstationregistration', (req, res) => {
    try {
        console.log(req.body);
        const chargingstationdata = {
            StationName: req.body.StationName,
            City: req.body.City,
            OwnerName: req.body.OwnerName,
            PhoneNumber: req.body.PhoneNumber,
            Email: req.body.Email,
            ChargingPortsNo: req.body.ChargingPortsNo,
            TypeofConnectors: req.body.TypeofConnectors,
            ChargingPower: req.body.ChargingPower,
            OperatingHours: req.body.OperatingHours,
            ChargingRate: req.body.ChargingRate,
            StationStatus: req.body.StationStatus,
        };
        stationModel(chargingstationdata).save().then((stationData) => {
            return res.status(200).json({
                success: true,
                error: false,
                message: 'Charging station added',
                data: stationData
            });
        }).catch((error) => {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'Station addition Failed',
                data: error
            });
        });
    } catch (error) {

    }
});

authRouter.get('/deletestation/:stationid', async (req, res) => {
    try {
        const id = req.params.stationid;
        const deletestation = await stationModel.deleteOne({ _id: id });
        if (deletestation.deletedCount == 1) {
            return res.status(200).json({
                success: true,
                error: false,
                message: 'station deleted',
            });
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'station not deleted',
            });
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: 'Something went wrong',
        });
    }
});

authRouter.get('/updatestation/:stationid', async (req, res) => {
    try {
        const stationid = req.params.stationid
        const oldData = await stationModel.findOne({ _id: stationid })
        console.log(oldData)

        const updateData = {
            StationName: req.query.StationName ? req.query.StationName : oldData.StationName,
            City: req.query.City ? req.query.City : oldData.City,
            OnwerName: req.query.OwnerName ? req.query.OwnerName : oldData.OnwerName,
            PhoneNumber: req.query.PhoneNumber ? req.query.PhoneNumber : oldData.PhoneNumber,
            Email: req.query.Email ? req.query.Email : oldData.Email,
            ChargingPortsNo: req.query.ChargingPortsNo ? req.query.ChargingPortsNo : oldData.ChargingPortsNo,
            TypeofConnectors: req.query.TypeofConnectors ? req.query.TypeofConnectors : oldData.TypeofConnectors,
            ChargingPower: req.query.ChargingPower ? req.query.ChargingPower : oldData.ChargingPower,
            OperatingHours: req.query.OperatingHours ? req.query.OperatingHours : oldData.OperatingHours,
            ChargingRate: req.query.ChargingRate ? req.query.ChargingRate : oldData.ChargingRate,
            StationStatus: req.query.StationStatus ? req.query.StationStatus : oldData.StationStatus,
        }
        const saveToModel = await stationModel.updateOne({ _id: stationid }, { $set: updateData })
        if (saveToModel.modifiedCount == 1) {

            return res.status(200).json({
                success: true,
                error: false,
                message: 'station data updated',
                data: saveToModel
            });
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'station data not updated',
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: 'Something went wrong',
        });

    }
})

authRouter.post('/ownerregistration', async (req, res) => {
    try {
        console.log(req.body);

        const oldEmail = await ownerModel.findOne({ Email: req.body.Email });
        if (oldEmail) {
            return res.status(400).json({ success: false, error: true, message: 'Email id already exists' });
        }

        const oldMobile = await ownerModel.findOne({ PhoneNumber: req.body.PhoneNumber });
        if (oldEmail) {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'Mobile number already exists'
            });
        }

        const oldUser = await loginModel.findOne({ username: req.body.username });
        if (oldUser) {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'User already exists'
            });
        }

        const loginData = {
            username: req.body.username,
            password: req.body.password,
            role: 'company',
            status: 'approved'
        };

        const saveLogin = await loginModel(loginData).save();

        const ownerRegisterData = {
            login_id: saveLogin._id,
            Name: req.body.Name,
            Email: req.body.Email,
            PhoneNumber: req.body.PhoneNumber,
        };

        const saveOwner = await ownerModel(ownerRegisterData).save();

        if (saveOwner) {
            return res.status(200).json({
                success: true,
                error: false,
                message: 'Registration Completed',
                data: saveOwner
            });
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'Registration Failed'
            });
        }
    } catch (error) {

    }
});


module.exports = authRouter;




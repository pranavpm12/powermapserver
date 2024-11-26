const express = require('express')
const userModel = require('../models/userModel')

const viewUsers = express.Router()

viewUsers.get('/viewUsers', async (req, res) => {
    try {

        let data = await userModel.find()
        if (data) {
            return res.status(200).json({
                success: true,
                error: false,
                message: 'Contact details collected',
                data: data
            });
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'Contact Failed',
                data: error
            })
        }

    } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: 'Contact Failed',
            data: error
        })
    }
})

viewUsers.get('/deleteUser/:userid', async (req, res) => {
    try {
        const id = req.params.userid
        const deleteUser = await userModel.deleteOne({ _id: id })
        if (deleteUser.deletedCount == 1) {
            return res.status(200).json({
                success: true,
                error: false,
                message: 'User data deleted',
            });
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'User data not deleted',
            });
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: 'Something went wrong',
        });
    }
})

viewUsers.get('/updateuser/:userid', async (req, res) => {
    try {
        const userid = req.params.userid

        const oldData = await userModel.findOne({ _id: userid })

        const updateData = {
            Name: req.query.Name ? req.query.Name : oldData.Name,
            Email: req.query.Email ? req.query.Email : oldData.Email,
            PhoneNumber: req.query.PhoneNumber ? req.query.PhoneNumber : oldData.PhoneNumber
        }

        const saveToModel = await userModel.updateOne({ _id: userid }, { $set: updateData })
        if (saveToModel.modifiedCount == 1) {

            return res.status(200).json({
                success: true,
                error: false,
                message: 'User data updated',
                data: saveToModel
            });
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'User data not updated',
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
module.exports = viewUsers
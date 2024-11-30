const express = require("express");
const allvehicleModel = require("../models/allvehicleModel");
const vehicleModelRoutes = express.Router();
const all2wheelModel = require("../models/all2wheelModel");
const vehicleModel = require("../models/vehicleModel");


// Create a new vehicle model
vehicleModelRoutes.post("/adminaddvehicle", async (req, res) => {
    try {
        const { brand, model, variants } = req.body;

        // Validate request body
        if (!brand || !model || !variants || !Array.isArray(variants)) {
            return res.status(400).json({ error: "Invalid input data" });
        }

        const newVehicle = new allvehicleModel({ brand, model, variants });
        await newVehicle.save();

        res.status(201).json({ message: "Vehicle model added successfully", data: newVehicle });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Get all vehicle models
vehicleModelRoutes.get("/", async (req, res) => {
    try {
        const vehicles = await allvehicleModel.find();
        res.status(200).json(vehicles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Get a specific vehicle model by ID
vehicleModelRoutes.get("/viewadminvehicle/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const vehicle = await allvehicleModel.findById(id);

        if (!vehicle) {
            return res.status(404).json({ error: "Vehicle model not found" });
        }

        res.status(200).json(vehicle);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Update a vehicle model
vehicleModelRoutes.put("/updateadminvehicle/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { brand, model, variants } = req.body;

        // Validate request body
        if (!brand || !model || !variants || !Array.isArray(variants)) {
            return res.status(400).json({ error: "Invalid input data" });
        }

        const updatedVehicle = await allvehicleModel.findByIdAndUpdate(
            id,
            { brand, model, variants },
            { new: true }
        );

        if (!updatedVehicle) {
            return res.status(404).json({ error: "Vehicle model not found" });
        }

        res.status(200).json({ message: "Vehicle model updated successfully", data: updatedVehicle });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Delete a vehicle model
vehicleModelRoutes.delete("/admindeletevehicle/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedVehicle = await allvehicleModel.findByIdAndDelete(id);

        if (!deletedVehicle) {
            return res.status(404).json({ error: "Vehicle model not found" });
        }

        res.status(200).json({ message: "Vehicle model deleted successfully", data: deletedVehicle });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}); 

//niuevhhbhbhbjbjbjkjbkbkjbkjbkjbkjbkjbkjkjbbkjkjbhuiebvobeoibov 



// Create a new vehicle model
vehicleModelRoutes.post("/adminadd2wheelers", async (req, res) => {
    try {
        const { brand, model, variants } = req.body;

        // Validate request body
        if (!brand || !model || !variants || !Array.isArray(variants)) {
            return res.status(400).json({ error: "Invalid input data" });
        }

        const newVehicle = new all2wheelModel({ brand, model, variants });
        await newVehicle.save();

        res.status(201).json({ message: "Vehicle model added successfully", data: newVehicle });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Get all vehicle models
vehicleModelRoutes.get("/view", async (req, res) => {
    try {
        const vehicles = await all2wheelModel.find();
        res.status(200).json(vehicles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Get a specific vehicle model by ID
vehicleModelRoutes.get("/viewadmin2wheeler/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const vehicle = await all2wheelModel.findById(id);

        if (!vehicle) {
            return res.status(404).json({ error: "Vehicle model not found" });
        }

        res.status(200).json(vehicle);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Update a vehicle model
vehicleModelRoutes.put("/updateadmin2wheeler/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { brand, model, variants } = req.body;

        // Validate request body
        if (!brand || !model || !variants || !Array.isArray(variants)) {
            return res.status(400).json({ error: "Invalid input data" });
        }

        const updatedVehicle = await all2wheelModel.findByIdAndUpdate(
            id,
            { brand, model, variants },
            { new: true }
        );

        if (!updatedVehicle) {
            return res.status(404).json({ error: "Vehicle model not found" });
        }

        res.status(200).json({ message: "Vehicle model updated successfully", data: updatedVehicle });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Delete a vehicle model
vehicleModelRoutes.delete("/admindelete2wheeler/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedVehicle = await all2wheelModel.findByIdAndDelete(id);

        if (!deletedVehicle) {
            return res.status(404).json({ error: "Vehicle model not found" });
        }

        res.status(200).json({ message: "Vehicle model deleted successfully", data: deletedVehicle });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

//njvnidbjigbjgbjib jib ji j jb jd bj bjetbnijnjozserxdctfgvybhuinjmkowazesxdrctfvgybhnwazzesxdrctfvgybhnjzexrdctfvgybhnjezxdrctf

vehicleModelRoutes.post("/useraddvehicle", async (req, res) => {
    try {
        const { userID, carID, wheelerID, vehicleNumber } = req.body;

        // Validate request body
        if(carID && wheelerID){
            return res.status(400).json({ error: "invalid vehicleID" });
        }
        if (!userID || !vehicleNumber) {
            return res.status(400).json({ error: "Invalid input data" });
        }
        const existingVehicle = await vehicleModel.findOne({ vehicleNumber });

        if (existingVehicle) {
            return res.status(400).json({ message: 'Vehicle number already exists!' });
        }


        const newVehicle = new vehicleModel({ userID, carID, wheelerID, vehicleNumber });
        await newVehicle.save();


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

vehicleModelRoutes.get("/viewuservehicle", async (req, res) => {
    try {
        const vehicles = await vehicleModel.find();
        res.status(200).json(vehicles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Update a vehicle model
vehicleModelRoutes.put("/updateuservehicle/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { userID, carID, wheelerID, vehicleNumber } = req.body;



        // Validate request body
        if(carID && wheelerID){
            return res.status(400).json({ error: "invalid vehicleID" });
        }
        if (!userID ||  !vehicleNumber) {
            return res.status(400).json({ error: "Invalid input data" });
        }

        const updateduservehicle = await vehicleModel.findByIdAndUpdate(
            id,
            { userID, carID, wheelerID, vehicleNumber},
            { new: true }
        );

        if (!updateduservehicle) {
            return res.status(404).json({ error: "Vehicle model not found" });
        }

        res.status(200).json({ message: "Vehicle model updated successfully", data: updateduservehicle });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

vehicleModelRoutes.delete("/deleteuservehicle/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteduservehicle = await vehicleModel.findByIdAndDelete(id);

        if (!deleteduservehicle) {
            return res.status(404).json({ error: "Vehicle model not found" });
        }

        res.status(200).json({ message: "Vehicle model deleted successfully", data: deleteduservehicle });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});
module.exports = vehicleModelRoutes;

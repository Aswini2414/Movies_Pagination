const Pagination = require("../models/paginationSchema");

const saveData = async (req,res) => {
    try {
        const { name, director, cast, image } = req.body;

        const newData = await new Pagination({ name, director, cast, image });
        await newData.save();
        res.status(201).json(newData);
        
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = saveData;
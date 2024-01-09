import CaModel from "../models/ca.js";

export const createCA = async (req, res, next) => {
  const { name, rollNo, mobile, email, college, branch } = req.body;
  const newCA = new CaModel({ name, rollNo, mobile, email, college, branch });
  try {
    await newCA.save();
    res.status(201).json({ message: "CA created successfully" });
  } catch (error) {
    next(error);
  }
};

export const getCAById = async (req, res, next) => {
  try {
    const { id } = req.body;
    const foundCA = await CaModel.findById(id);
    if (foundCA) {
      res.json(foundCA);
    } else {
      res.status(404).json({ message: "CA not found" });
    }
  } catch (error) {
    next(error);
  }
};

export const updateCA = async (req, res, next) => {
  try {
    const { id, newData } = req.body;
    const updatedCA = await CaModel.findByIdAndUpdate(
      id,
      { $set: newData },
      { new: true }
    );
    if (updatedCA) {
      res.json(updatedCA);
    } else {
      res.status(404).json({ message: "CA not found" });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteCA = async (req, res, next) => {
  try {
    const { id } = req.body;
    const deletedCA = await CaModel.findByIdAndDelete(id);
    if (deletedCA) {
      res.json(deletedCA);
    } else {
      res.status(404).json({ message: "CA not found" });
    }
  } catch (error) {
    next(error);
  }
};

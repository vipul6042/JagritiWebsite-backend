import CaModel from "../models/ca.js";

export const createCA = async (req, res) => {
  const { name, rollNo, mobile, email, college, branch } = req.body;
  const newCA = new CaModel({ name, rollNo, mobile, email, college, branch });
  try {
    await newCA.save();
    res.status(201).json({ message: "CA created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCAByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const foundCA = await CaModel.findOne({ email });
    if (foundCA) {
      res.json(foundCA);
    } else {
      res.status(404).json({ message: "CA not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCAByEmail = async (req, res) => {
  try {
    const { email, newData } = req.body;
    const updatedCA = await CaModel.findOneAndUpdate(
      { email },
      { $set: newData },
      { new: true }
    );
    if (updatedCA) {
      res.json(updatedCA);
    } else {
      res.status(404).json({ message: "CA not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCAByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const deletedCA = await CaModel.findOneAndDelete({ email });
    if (deletedCA) {
      res.json(deletedCA);
    } else {
      res.status(404).json({ message: "CA not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllCA = async (req, res) => {
  try {
    const allCA = await CaModel.find();
    if (allCA.length > 0) {
      res.json(allCA);
    } else {
      res.status(404).json({ message: "No CAs found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

import Menu from "../models/menu.model.js";
import { v2 as cloudinary } from "cloudinary";
export const getAllMenu = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addMenu = async (req, res) => {
  try {
    const { DealHeading, DealText, Price, Rating, Category } = req.body;
    const image = req.file;
    if (!DealHeading || !DealText || !Price || !Rating || !Category || !image) {
      return res.status(400).json({ message: "Missing Details" });
    }
    const imageUpload = await cloudinary.uploader.upload(image.path, {
      resource_type: "image"
    });
    const imageUrl = imageUpload.secure_url;
    const newMenu = new Menu({
      DealHeading,
      DealText,
      Price,
      Rating,
      Category,
      imageUrl
    });

    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const updateMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    let imageUrl;
    if (req.file) {
      const image = req.file;
      const imageUpload = await cloudinary.uploader.upload(image.path, {
        resource_type: "image"
      });
      imageUrl = imageUpload.secure_url;
      updates.imageUrl = imageUrl;
    }

    const updatedMenu = await Menu.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true
    });

    if (!updatedMenu) {
      return res.status(404).json({ message: "Menu not found" });
    }

    res.status(200).json(updatedMenu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMenu = await Menu.findByIdAndDelete(id);

    if (!deletedMenu) {
      return res.status(404).json({ message: "Menu not found" });
    }

    res.status(200).json({ message: "Menu deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getMenuById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "Id required!" });
    const menu = await Menu.findById(id);
    if (!menu) return res.status(404).json({ message: "Menu Not Found!" });
    res.status(200).json({ menu });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getMenuByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    if (!category)
      return res.status(400).json({ message: "Category required!" });
    const menus = await Menu.find({ Category: category });
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

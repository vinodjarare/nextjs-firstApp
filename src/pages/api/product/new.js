import connectDb from "../../../utils/database";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(400).json({
        success: false,
        message: `No API with ${req.method} method`,
      });
    }
    connectDb();
    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
    });

    res.status(201).json("product created Successfully");
  } catch (error) {}
};

export default handler;

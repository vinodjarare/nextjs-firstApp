import connectDb from "../../../utils/database";
import Product from "@/models/Product";
export default async function handler(req, res) {
  connectDb();
  const products = await Product.find();

  res.status(200).json(products);
}

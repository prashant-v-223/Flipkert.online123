// pages/api/products/index.js
import { connectToDatabase } from '../../../utils/mongodb';
import Product from '../../../models/Product';

connectToDatabase();
export default async function handler(req, res) {

    const { method } = req;

    switch (method) {
        case 'GET':
            // Fetch all products
            try {
                const products = await Product.find({});
                res.status(200).json(products);
            } catch (error) {
                res.status(500).json({ message: 'Internal Server Error' });
            }
            break;

        case 'POST':
            try {
                const { Title, color, images, images1, images2, images3, images4, size, storage, selling_price, mrp, features, disp_order } = req.body;
                const newProduct = new Product({
                    Title,
                    color,
                    size,
                    storage,
                    selling_price,
                    mrp,
                    features,
                    images, images1, images2, images3, images4,
                    disp_order,
                });

                const savedProduct = await newProduct.save();
                res.status(201).json({ status: 1, data: savedProduct });
            } catch (error) {
                res.status(500).json({ status: 0, message: 'Internal Server Error' });
            }
            break;

        default:
            res.status(405).json({ message: 'Method Not Allowed' });
            break;
    }
}

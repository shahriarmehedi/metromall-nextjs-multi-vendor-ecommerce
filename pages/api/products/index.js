
import Product from '../../../models/ProductModel'
import dbConnect from '../../../utilities/mongoose';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect()

    if (method === "GET") {
        try {
            const products = await Product.find({});
            res.status(200).json({ success: true, data: products });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

    if (method === "POST") {
        try {
            const product = await Product.create(req.body);
            res.status(201).json({ success: true, data: product });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

}
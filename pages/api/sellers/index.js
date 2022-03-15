
import Seller from '../../../models/SellerModel'
import dbConnect from '../../../utilities/mongoose';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect()

    if (method === "GET") {
        try {
            const sellers = await Seller.find({});
            res.status(200).json({ success: true, data: sellers });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

    if (method === "POST") {
        try {
            const seller = await Seller.create(req.body);
            res.status(201).json({ success: true, data: seller });

        } catch (error) {
            res.status(500).json({ success: false });
        }
    }

}
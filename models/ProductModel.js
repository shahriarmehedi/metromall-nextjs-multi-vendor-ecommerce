import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
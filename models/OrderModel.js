import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
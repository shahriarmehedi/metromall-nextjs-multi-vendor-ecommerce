import mongoose from 'mongoose';

const CouponSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
);

export default mongoose.models.Coupon || mongoose.model("Coupon", CouponSchema);
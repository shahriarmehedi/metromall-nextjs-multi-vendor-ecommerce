import mongoose from 'mongoose';

const SellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        default: "https://omuk.com/default_photo.png"
    },
    banner: {
        type: String,
        default: "https://omuk.com/default_banner.png"
    },
},
    { timestamps: true }
);

export default mongoose.models.Seller || mongoose.model("Seller", SellerSchema);
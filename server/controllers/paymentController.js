// import { is } from "core-js/core/object";
import { instance } from "../server.js";
import crypto from 'crypto'

// export const checkout = async (req, res) => {
//     const option = {
//         amount: Number(req.body.amount * 100),
//         currency: "INR",
//     }
//     const order = await instance.orders.create(option)

//     res.status(200).json({
//         success: true,
//         order,
//     })
// }

export const checkout = async (req, res) => {
    try {
        const options = {
            amount: Number(req.body.amount * 100),
            currency: "INR",
        };
        const order = await instance.orders.create(options);

        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: "An error occurred during checkout.",
        });
    }
};

export const paymentVerification = async (req, res) => {
    try {
        console.log(req.body)

        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const body = razorpay_order_id + "|" + razorpay_payment_id;

        // generated_signature = hmac_sha256(razorpay_order_id + "|" + razorpay_payment_id, process.env.RAZORPAY_APT_SECRET);

        const expectedSignature = crypto
            .createHmac("sha256", "Z988cVx0bnuBr95h4TRjk7j3")
            .update(body.toString())
            .digest("hex");

        const isAuthentic = expectedSignature === razorpay_signature;
        // const isAuthentic = generated_signature === razorpay_signature;

        console.log(isAuthentic)
        console.log(expectedSignature)
        console.log(razorpay_signature)

        if (isAuthentic) {
            // Database comes here
            res.redirect(
                `http://localhost:8081/paymentsuccess?reference=${razorpay_payment_id}`
            );
        } else {
            res.status(400).json({
                success: false,
            });
        }

        res.status(200).json({
            success: true,
        });

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
        });
    }

}